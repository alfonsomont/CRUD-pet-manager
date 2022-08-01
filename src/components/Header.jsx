function Header() {
  return (
    <>
      <div className="flex justify-center mx-auto">
        <img
          class="object-contain md:object-scale-down h-14 mr-2"
          src="https://res.cloudinary.com/koolgram/image/upload/v1659303573/petcare_logo_rudx39.png"
        />
        <h1 className="font-black text-5xl">
          PetCare {""}
          <span className="text-indigo-700">Manager</span>
        </h1>
      </div>
    </>
  );
}

export default Header;
