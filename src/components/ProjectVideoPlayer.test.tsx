import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectVideoPlayer } from "./ProjectVideoPlayer";

const observerCallbacks: IntersectionObserverCallback[] = [];

class IntersectionObserverMock {
  constructor(callback: IntersectionObserverCallback) {
    observerCallbacks.push(callback);
  }

  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn(() => []);
  unobserve = vi.fn();
  root = null;
  rootMargin = "";
  thresholds = [];
}

const triggerObserver = (index: number, isIntersecting: boolean) => {
  observerCallbacks[index](
    [{ isIntersecting } as IntersectionObserverEntry],
    {} as IntersectionObserver,
  );
};

describe("ProjectVideoPlayer", () => {
  beforeEach(() => {
    observerCallbacks.length = 0;
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
    vi.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => undefined);
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue(undefined);
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("adds sources only near the viewport and starts muted playback", () => {
    render(<ProjectVideoPlayer />);

    const video = screen.getByLabelText("Архитектурная визуализация проекта");
    expect(video.querySelectorAll("source")).toHaveLength(0);

    act(() => {
      triggerObserver(0, true);
      triggerObserver(1, true);
    });

    expect(video.querySelectorAll("source")).toHaveLength(2);
    expect(video).toHaveAttribute("preload", "metadata");
    expect(video).toHaveProperty("muted", true);
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it("loads sources once and does not reset the video on viewport transitions", () => {
    render(<ProjectVideoPlayer />);

    act(() => {
      triggerObserver(0, true);
    });

    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1);
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();

    act(() => {
      triggerObserver(1, true);
    });

    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1);
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);

    act(() => {
      triggerObserver(1, false);
    });

    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1);
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();

    act(() => {
      triggerObserver(1, true);
    });

    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1);
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2);
  });

  it("keeps autoplay disabled and exposes controls for reduced motion", () => {
    window.matchMedia = vi.fn().mockReturnValue({
      matches: true,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    render(<ProjectVideoPlayer />);

    const video = screen.getByLabelText("Архитектурная визуализация проекта");

    act(() => {
      triggerObserver(0, true);
      triggerObserver(1, true);
    });

    expect(video).toHaveAttribute("controls");
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();
  });
});
