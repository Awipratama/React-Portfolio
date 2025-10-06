import Cerdas from '../assets/Cerdas-meme.png';

export default function HeroProfile() {
    return (
        <section className="hero w-full flex flex-col pt-40 items-center">
            <div className="hero-text text-center">
                <h2 className="text-[38px] font-bold">Jhon Doe</h2>
                <p className="mt-4">Profesional Full Stack Developer</p>
            </div>
            <img src={Cerdas} alt="Profile" className="w-[25%]" />
        </section>
    );
}
