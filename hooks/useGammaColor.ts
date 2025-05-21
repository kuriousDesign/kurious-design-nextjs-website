"use client";

import useDeviceOrientation from "./useDeviceOrientation";
import { hsvToRgb } from "./../utils/colorFade";

/**
 * Convert gamma orientation to interpolated RGB string
 */
export function interpolateColorFromGamma(
  gamma: number | null,
  h = 36,
  s = 0.47,
  vMax = 0.96,
  vMin = 0.26
): string {
  if (gamma === null) gamma = 0;

  const maxAngle = 20;
  const deadBand = 2.5;
  const absGamma = Math.max(deadBand, Math.min(Math.abs(gamma), maxAngle));
  const ratio = (absGamma - deadBand) / (maxAngle - deadBand);

  const v = vMax - ratio * (vMax - vMin);
  const [r, g, b] = hsvToRgb(h, s, v);
  return `rgb(${r}, ${g}, ${b})`;
}

// custom props for useGammaColor
export interface UseGammaColorProps {
  h?: number; // hue
  s?: number; // saturation
  vMax?: number; // max value
  vMin?: number; // min value
}

/**
 * Hook that provides dynamic RGB color based on device orientation (gamma)
 */
export default function useGammaColor(
  props?: { h: number; s: number; vMax: number; vMin: number } | UseGammaColorProps
) {
  const {
    deviceOrientation,
    requestAccess,
    isPermissionGranted,
    isSupported,
    error,
  } = useDeviceOrientation();

  const gamma = isPermissionGranted && isSupported ? deviceOrientation.gamma : null;
  const color = interpolateColorFromGamma(
    gamma,
    props?.h,
    props?.s,
    props?.vMax,
    props?.vMin
  );

  return {
    color,                 // `rgb(...)` string
    gamma,
    deviceOrientation,
    requestAccess,
    isPermissionGranted,
    isSupported,
    error,
  };
}
