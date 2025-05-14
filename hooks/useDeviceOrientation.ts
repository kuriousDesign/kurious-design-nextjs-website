"use client";

import { useCallback, useEffect, useState } from 'react';

interface DeviceOrientationState {
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
  absolute: boolean;
}

// Extended interface for iOS 13+ permission
interface DeviceOrientationEventExtended extends DeviceOrientationEvent {
  requestPermission?: () => Promise<"granted" | "denied">;
}

function useDeviceOrientation() {
  const [orientation, setOrientation] = useState<DeviceOrientationState>({
    alpha: null,
    beta: null,
    gamma: null,
    absolute: false,
  });

  const [isSupported, setIsSupported] = useState(false);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    setOrientation({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
      absolute: event.absolute,
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.DeviceOrientationEvent !== "undefined") {
      setIsSupported(true);

      const deviceOrientationEvent = DeviceOrientationEvent as unknown as DeviceOrientationEventExtended;

      // If no permission required, automatically start listening
      if (typeof deviceOrientationEvent.requestPermission !== "function") {
        setIsPermissionGranted(true);
        window.addEventListener("deviceorientation", handleOrientation);
      }

      return () => {
        window.removeEventListener("deviceorientation", handleOrientation);
      };
    }
  }, [handleOrientation]);

  const requestAccess = useCallback(async () => {
    if (typeof window === "undefined") return;

    const deviceOrientationEvent = DeviceOrientationEvent as unknown as DeviceOrientationEventExtended;

    if (typeof deviceOrientationEvent.requestPermission === "function") {
      try {
        const permissionState = await deviceOrientationEvent.requestPermission();
        if (permissionState === "granted") {
          setIsPermissionGranted(true);
          window.addEventListener("deviceorientation", handleOrientation);
        } else {
          setError(new Error("Permission to access device orientation was denied"));
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error during permission request"));
      }
    }
  }, [handleOrientation]);

  const revokeAccess = useCallback(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("deviceorientation", handleOrientation);
    }
    setIsPermissionGranted(false);
  }, [handleOrientation]);

  return {
    deviceOrientation: orientation,
    requestAccess,
    revokeAccess,
    isPermissionGranted,
    isSupported,
    error,
  };
}

export default useDeviceOrientation;
