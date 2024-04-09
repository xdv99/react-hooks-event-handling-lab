// Code Keypad Component Here

function Keypad() {
  return (
    <div>
      <input
        type="password"
        onChange={() => console.log("Entering password...")}
      />
    </div>
  );
}

export default Keypad;
