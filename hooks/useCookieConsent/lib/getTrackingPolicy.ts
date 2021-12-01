import { TrackingPolicy } from '../types';

export function getTrackingPolicy(): TrackingPolicy {
    const metaElement = document.querySelector(
        'meta[name="prezly:tracking_policy"]',
    ) as HTMLMetaElement | null;
    if (metaElement) {
        return metaElement.content as TrackingPolicy;
    }

    return TrackingPolicy.UNRESTRICTED;
}
