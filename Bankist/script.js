const movements = [200, 450, -400, 3000, -456, -130, 70, 1300];
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.ads(movements)}`);
  }
}
