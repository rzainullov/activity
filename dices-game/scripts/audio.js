/* eslint-disable linebreak-style */
export class Audio {
  constructor() {
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.playTime = 0.5;
    this.notes = [
      {
        noteName: "Success",
        noteParams: {
          oscillatorFrequency: 500,
          biquadFilterType: "peaking",
          biquadFilterFrequency: 100,
          biquadFilterGain: 25
        }
      },
      {
        noteName: "Push",
        noteParams: {
          oscillatorFrequency: 50,
          biquadFilterType: "lowshelf",
          biquadFilterFrequency: 200,
          biquadFilterGain: 10
        }
      },
      {
        noteName: "Roll",
        noteParams: {
          oscillatorFrequency: 15,
          biquadFilterType: "lowshelf",
          biquadFilterFrequency: 200,
          biquadFilterGain: 25
        }
      },
      {
        noteName: "Error",
        noteParams: {
          oscillatorFrequency: 100,
          biquadFilterType: "lowshelf",
          biquadFilterFrequency: 200,
          biquadFilterGain: 25
        }
      }
    ];
  }

  createOscillator(frequency) {
    this.oscillator = this.context.createOscillator();
    this.oscillator.type = "sine";
    this.oscillator.frequency.value = frequency;
    this.oscillator.connect(this.biquadFilter);
    return this;
  }

  createBiquadFilter(type, frequency, gain) {
    this.biquadFilter = this.context.createBiquadFilter();
    this.biquadFilter.type = type;
    this.biquadFilter.frequency.value = frequency;
    this.biquadFilter.gain.value = gain;
    this.biquadFilter.connect(this.gain);
  }

  createGain() {
    this.gain = this.context.createGain();
    this.gain.gain.exponentialRampToValueAtTime(0.001, this.now + this.playTime);
    this.gain.connect(this.context.destination);
  }

  findNote(noteName) {
    const noteParams = this.notes.find(el => el.noteName === noteName).noteParams;
    return noteParams;
  }

  playNote(noteName) {
    this.now = this.context.currentTime;
    const noteParams = this.findNote(noteName);
    this.createGain();
    this.createBiquadFilter(noteParams.biquadFilterType,
      noteParams.biquadFilterFrequency,
      noteParams.biquadFilterGain);
    this.createOscillator(noteParams.oscillatorFrequency);
    this.oscillator.start(this.now);
    this.oscillator.stop(this.now + this.playTime);
    return this;
  }
}
