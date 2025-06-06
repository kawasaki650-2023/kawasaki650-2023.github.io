// Simple Analytics Tracker
class SimpleAnalytics {
  constructor() {
    this.storageKey = 'moto_analytics';
    this.data = this.loadData();
  }

  loadData() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : {
      pageViews: 0,
      audioClicks: 0,
      contactClicks: 0,
      firstVisit: new Date().toISOString(),
      lastVisit: new Date().toISOString()
    };
  }

  saveData() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }

  recordPageView() {
    this.data.pageViews++;
    this.data.lastVisit = new Date().toISOString();
    this.saveData();
    console.log('Page view recorded');
  }

  recordAudioClick() {
    this.data.audioClicks++;
    this.saveData();
    console.log('Audio click recorded');
  }

  recordContactClick() {
    this.data.contactClicks++;
    this.saveData();
    console.log('Contact click recorded');
  }

  getStats() {
    return this.data;
  }
}

// Create global instance
window.analytics = new SimpleAnalytics();
