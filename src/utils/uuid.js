export default function() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    letter
  ) {
    const random = (Math.random() * 16) | 0;
    return (letter === "x" ? random : (random & 0x3) | 0x8).toString(16);
  });
}
