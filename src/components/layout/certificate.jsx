import cert1 from '../../assets/cert1.png';
import cert2 from '../../assets/cert2.png';
import cert3 from '../../assets/cert3.png';
import cert4 from '../../assets/cert4.png';
import cert5 from '../../assets/cert5.png';
import cert6 from '../../assets/cert6.png';
import cert7 from '../../assets/cert7.png';
import cert8 from '../../assets/cert8.png';

const topRowCertificates = [cert1, cert2, cert3, cert4];
const bottomRowCertificates = [cert5, cert6, cert7, cert8];


const CertificateSlider = () => {
    return (
        <section className="bg-white py-20 overflow-hidden relative">
            {/* Row 1 - moves to right */}
            <div className="overflow-hidden">
            <div
                className="flex gap-6"
                style={{
                animation: "scrollRight 28s linear infinite",
                width: "max-content",
                }}
            >
                {[...topRowCertificates, ...topRowCertificates].map((img, i) => (
                <div
                    key={`top-${i}`}
                    className="min-w-[400px] h-[300px] bg-gray-200 shadow-md flex items-center justify-center p-9"
                >
                    <img
                    src={img}
                    alt={`Certificate top ${i}`}
                    className="w-full h-full object-cover"
                    />
                </div>
                ))}
            </div>
            </div>
    
            {/* Row 2 - moves to left */}
            <div className="overflow-hidden mt-10">
            <div
                className="flex gap-6"
                style={{
                animation: "scrollLeft 28s linear infinite",
                width: "max-content",
                }}
            >
                {[...bottomRowCertificates, ...bottomRowCertificates].map((img, i) => (
                <div
                    key={`bottom-${i}`}
                    className="min-w-[400px] h-[300px] bg-gray-200 shadow-md flex items-center justify-center p-9"
                >
                    <img
                    src={img}
                    alt={`Certificate bottom ${i}`}
                    className="w-full h-full object-cover"
                    />
                </div>
                ))}
            </div>
            </div>
    
            {/* Inline style for keyframes */}
            <style>{`
            @keyframes scrollLeft {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
    
            @keyframes scrollRight {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0); }
            }
            `}</style>
        </section>
        );
    };
    
    export default CertificateSlider;