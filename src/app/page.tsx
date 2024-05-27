export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-violet-500">
      <div id="header"></div>
      <div className="p-20 w-[90%] h-fit absolute rounded-lg backdrop-blur-3xl border overflow-hidden flex flex-col justify-center z-50 shadow-md">
        <h1 className="text-white text-8xl uppercase">do what you love</h1>
        <h2 className="text-white">
          Bei CoTalent findest Du blitzschnell geprüfte und bewertete Talente,
          buchst sie zum Fixpreis und behältst die volle Kontrolle dank
          maximaler Flexibilität - Änderungen und Stornierungen sind jederzeit
          möglich.
        </h2>
      </div>
    </div>
  );
}
