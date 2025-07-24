class SwadeSpeedProvider extends SpeedProvider {
  get colors() {
    return [
      {id: "pace", default: 0x00ff00, label: "Pace"},
      {id: "run", default: 0xffff00, label: "Corrida"}
    ];
  }

  getRanges(token) {
    const actor = token.actor;
    if (!actor) return [];

    const pace = parseInt(actor.system.attributes.pace?.value) || 6;
    const runDie = parseInt(actor.system.attributes.run?.die?.sides) || 6;

    return [
      {range: pace, color: "pace"},
      {range: pace + runDie, color: "run"}
    ];
  }
}

dragRuler.registerModule("drag-ruler-swade-custom", SwadeSpeedProvider);