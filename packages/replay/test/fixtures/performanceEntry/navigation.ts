import type { PerformanceNavigationTiming } from '../../../src/types';

export function PerformanceEntryNavigation(obj?: Partial<PerformanceNavigationTiming>): PerformanceNavigationTiming {
  const entry = {
    name: 'https://sentry.io/organizations/sentry/discover/',
    entryType: 'navigation',
    startTime: 0,
    duration: 682.6999999284744,
    initiatorType: 'navigation',
    nextHopProtocol: 'http/1.1',
    workerStart: 0,
    redirectStart: 0,
    redirectEnd: 0,
    fetchStart: 1.5,
    domainLookupStart: 1.5,
    domainLookupEnd: 1.5,
    connectStart: 1.5,
    connectEnd: 1.5,
    secureConnectionStart: 1.5,
    requestStart: 41.60000002384186,
    responseStart: 165.5,
    responseEnd: 167.19999992847443,
    transferSize: 19974,
    encodedBodySize: 19674,
    decodedBodySize: 19674,
    serverTiming: [],
    unloadEventStart: 0,
    unloadEventEnd: 0,
    domInteractive: 303.2999999523163,
    domContentLoadedEventStart: 303.2999999523163,
    domContentLoadedEventEnd: 304.6999999284744,
    domComplete: 682.5,
    loadEventStart: 682.5,
    loadEventEnd: 682.6999999284744,
    type: 'navigate' as NavigationType,
    redirectCount: 0,
    ...obj,
  };

  return {
    ...entry,
    toJSON: () => entry,
  };
}
