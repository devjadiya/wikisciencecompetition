
type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const gtagEvent = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const pageview = (url: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'GTM-N9KGHGR6', {
        page_path: url,
    })
  }
}

    