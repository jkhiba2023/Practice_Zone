function beautiFul() {
  const makeupKit = ['Lipstick', 'Blush', 'Eyeliner', 'Nail-paint', 'Maskara'];
  function ladiesParler() {
    for (let beautyKit of makeupKit) {
      console.log(`Give me the ${beautyKit.toUpperCase()}`);

    }
  }
  ladiesParler();
}
beautiFul();