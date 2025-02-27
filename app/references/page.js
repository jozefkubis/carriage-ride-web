export default function Page() {
  const references = [
    {
      name: "Jozef K.",
      rating: 5,
      text: "Bola to úžasná jazda, ďakujeme!",
      date: "12.02.2024",
    },
    {
      name: "Mária P.",
      rating: 4,
      text: "Veľmi príjemný zážitok, odporúčam!",
      date: "10.02.2024",
    },
    {
      name: "Andrej M.",
      rating: 5,
      text: "Perfektná atmosféra, určite si to zopakujeme!",
      date: "05.02.2024",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-creamy-100 min-h-screen pb-10 px-5">
      {/* HEADER */}
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold text-primary-800">Čo hovoria naši zákazníci?</h1>
        <p className="text-lg text-primary-600 mt-2">
          Naše služby hodnotili už desiatky spokojných zákazníkov.
        </p>
      </header>

      {/* GRID S REFERENCIAMI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {references.map((ref, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-5 text-center">
            {/* HVIEZDIČKOVÉ HODNOTENIE */}
            <p className="text-yellow-500 text-xl">{"⭐".repeat(ref.rating)}</p>
            <p className="text-gray-700 italic mt-2">"{ref.text}"</p>
            <p className="text-sm text-gray-500 mt-2">
              - {ref.name}, {ref.date}
            </p>
          </div>
        ))}
      </div>

      {/* TLAČIDLO NA PRIDANIE RECENZIE (VOLITEĽNÉ) */}
      <button className="mt-10 bg-primary-800 text-white px-6 py-3 rounded-md hover:bg-primary-600 transition">
        Pridať referenciu
      </button>
    </div>
  );
}
