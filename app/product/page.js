export default function Page() {
  return (
    <div className="flex flex-col">
      <header className="flex flex-col items-center mx-auto gap-5 my-20 w-1/2">
        <h1 className="text-5xl font-bold text-center">
          Naše romantické jazdy pre každého
        </h1>
        <p className="text-center text-lg px-12">
          Ponúkame rôzne typy jázd, ktoré sú ideálne pre páry, rodiny a
          špeciálne udalosti. Každá jazda je jedinečným zážitkom, ktorý si
          zamilujete.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full mx-auto mb-10 px-10 sm:px-20 lg:px-36">
        <div className="flex flex-col gap-10 text-center font-bold">
          <div className="bg-primary-200 w-full aspect-[4/3]"></div>
          <p className="text-xl">Jazdy pre páry na romantické chvíle</p>
        </div>
        <div className="flex flex-col gap-10 text-center font-bold">
          <div className="bg-primary-200 w-full aspect-[4/3]"></div>
          <p className="text-xl">Rodinné jazdy pre všetkých členov rodiny</p>
        </div>
        <div className="flex flex-col gap-10 text-center font-bold">
          <div className="bg-primary-200 w-full aspect-[4/3]"></div>
          <p className="text-xl">Špeciálne udalosti a oslavy v kočiari</p>
        </div>
      </div>

      <div className="flex justify-center my-14">
        <button className="bg-primary-200 text-primary-900 text-xl font-semibold px-4 py-2 rounded-sm">
          Rezervovať
        </button>
      </div>
    </div>
  )
}
