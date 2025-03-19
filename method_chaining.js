const robot = {
  currentActivity: undefined,
  walk() {
    this.currentActivity = "walking";
    console.log(this.currentActivity);
    return this;
  },
  talk() {
    this.currentActivity = "talking";
    console.log(this.currentActivity);
    return this;
  },
  write() {
    this.currentActivity = "writing";
    console.log(this.currentActivity);
    return this;
  },
};

robot.walk().talk().write();
