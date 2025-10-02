import Ambatukam from '../assets/Ambatukam.jpg';

export default function Profile() {
    return (
        <section className="Profile w-[35%] px-4 py-10 flex flex-col items-center">
            <img src={Ambatukam} alt="Profile" className="w-[50%] rounded-2xl" />
            <h2 className="text-[38px] font-bold">Jhon Doe</h2>
            <p className="mt-4">This is the profile section.</p>
        </section>
    );
}
