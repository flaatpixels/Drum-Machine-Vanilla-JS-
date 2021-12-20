/**
 * First bank of available sounds
 */
const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  /**
 * Second bank of available sounds
 */
  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];
  

  /**
   * Container of pads
   * 
   * @type {HTMLElement}
   */
  let padsContainer = document.getElementById("pads-container");

  /**
   * Name of the current Pad Pressed
   * 
   * @type {HTMLElement}
   */
  let currentPadName = document.getElementById("pad-name");

  /**
   * Button to turn on/off the pad
   * 
   * @type {HTMLElement}
   */
  let powerButton = document.getElementById("power-button");

  /**
   * Button to change the volume of the pad
   * 
   * @type {HTMLElement}
   */
  let volumePicker = document.getElementById("volume-picker");

  /**
   * Button to change the bank sounds of the pad
   * 
   * @type {HTMLElement}
   */
  let toggleBankButton = document.getElementById("toggle-bank");
  
  /**
   * Create the pads of the Drum Machine
   * 
   * @param {Object} bank List of the bank sounds 
   */
  const createPads = (bank) => {

    // Clean the pads
    // In case there were some pads earlier created
    padsContainer.innerHTML = '';

    bank.forEach((el) => {
      let padWrapper = document.createElement("div");
      let padButton = document.createElement("button");
      let padButtonLabel = document.createTextNode(el.keyTrigger);
      let audioClip = document.createElement("audio");

      padWrapper.setAttribute("class", "pad-wrapper");
      
      audioClip.setAttribute("src", el.url);
      audioClip.setAttribute("data-key", el.keyTrigger);
      audioClip.setAttribute("data-code", el.keyCode);
      audioClip.setAttribute("data-name", el.id);
      audioClip.volume= volumePicker.value;
      
      padButton.setAttribute("data-key", el.keyTrigger);
      padButton.setAttribute("data-code", el.keyCode);
      padButton.setAttribute("class", "pad");
      padButton.appendChild(padButtonLabel);
      
      padWrapper.appendChild(padButton);
      padWrapper.appendChild(audioClip);
      
      padsContainer.appendChild(padWrapper);
      
      // Add Events to the buttons
      // To be able to interact with the Drum Machine
      padButton.addEventListener("click", handleClick);      
    });

    // Add keydown event
    // To be able to interact with the Drum Machine
    document.addEventListener("keydown", handleKeyDown);
  }
  
  /**
   * Handle keydown on the document
   * In order to trigger the pads of the Drum Machine
   * 
   * @param {*} e The keydown event object
   * @returns void
   */
  const handleKeyDown = (e) => playPad(e.keyCode);
  
  /**
   * Handle the click event
   * On the pads of the Drum Machine
   * 
   * @param {*} e The click event object
   * @returns 
   */
  const handleClick = (e) => playPad(e.currentTarget.dataset.code);
  
  /**
   * Play the right audio clip
   * When click or keypress event happens
   * 
   * @param {*} keyCode The keycode of drum pad
   */
  const playPad = (keyCode) => {
    let audioTarget = document.querySelector(`audio[data-code="${keyCode}"]`);
    
    if(audioTarget) {
      audioTarget.currentTime = 0;
      audioTarget.play();    
      currentPadName.innerText = audioTarget.dataset.name.split("-").join(" ");
    }
    
  }

  /**
   * Update the volume of the Drum Machine
   * 
   * @param {*} e 
   */
  const updateVolume = (e) => {
    document.getElementsByTagName("audio")
            .forEach(audio => audio.volume = e.currentTarget.value);
  }

  volumePicker.addEventListener("change", (e) => updateVolume(e));
    
  powerButton.addEventListener("change", (e) => {
    if(e.currentTarget.checked) {
      document.addEventListener("keydown", handleKeyDown);
      document.getElementsByClassName("pad").forEach(button => button.addEventListener("click", handleClick))
    } else {
      document.getElementsByClassName("pad").forEach(button => button.removeEventListener("click", handleClick))
      document.removeEventListener("keydown", handleKeyDown);
    }
  })
  
  toggleBankButton.addEventListener("change", (e) => !e.currentTarget.checked ? createPads(bankOne) : createPads(bankTwo));

  createPads(bankOne);
  
  
  
  