"use client";
import Image from 'next/image';
import Link from 'next/link';
import jaboataoCentro from '../../../public/images/regionais/regional-1.png';
import cavaleiro from '../../../public/images/regionais/regional-2.png';
import curado from '../../../public/images/regionais/regional-3.png';
import muribeca from '../../../public/images/regionais/regional-4.png';
import prazeres from '../../../public/images/regionais/regional-5.png';
import praias from '../../../public/images/regionais/regional-6.png';
import guararapes from '../../../public/images/regionais/regional-7.png';

const Mapasaude = () => {
    const regions = [
        { name: 'JABOATÃO CENTRO', region: 'REGIONAL 01', imgSrc: jaboataoCentro, link: '../maparegional1' },
        { name: 'CAVALEIRO', region: 'REGIONAL 02', imgSrc: cavaleiro, link: '../maparegional2' },
        { name: 'CURADO', region: 'REGIONAL 03', imgSrc: curado, link: '../maparegional3' },
        { name: 'MURIBECA', region: 'REGIONAL 04', imgSrc: muribeca, link: '../maparegional4' },
        { name: 'PRAZERES', region: 'REGIONAL 05', imgSrc: prazeres, link: '../maparegional5' },
        { name: 'PRAIAS', region: 'REGIONAL 06', imgSrc: praias, link: '../maparegional6' },
        { name: 'GUARARAPES', region: 'REGIONAL 07', imgSrc: guararapes, link: '../maparegional7' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b bg-[#003476] py-10">
            {/* Grid container */}
            <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto pt-[40px]">
                {/* Primeira linha: 4 itens */}
                {regions.slice(0, 4).map((region, index) => (
                    <Link href={region.link} key={index}>
                        <div
                            className="bg-gradient-to-b from-blue-500 to-blue-700 text-center p-6 relative h-full group border-[1px] border-transparent hover:border-yellow-400 transition-all duration-300 flex flex-col justify-center items-center"
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={region.imgSrc}
                                    alt={region.name}
                                    width={100}
                                    height={100}
                                    className="mb-4"
                                />
                            </div>
                            <h3 className="text-white font-bold">{region.name}</h3>
                            <p className="text-white">{region.region}</p>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#003476] to-blue-500 text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <h3 className="text-white font-bold">{region.name}</h3>
                                <p className="text-white">{region.region}</p>
                            </div>
                        </div>
                    </Link>
                ))}

                {/* Segunda linha: 3 itens maiores, centralizados */}
                <div className="col-span-4 grid grid-cols-3 gap-4 justify-center">
                    {regions.slice(4).map((region, index) => (
                        <Link href={region.link} key={index}>
                            <div
                                className="bg-gradient-to-b from-blue-500 to-blue-700 text-center p-6 relative group border-2 border-transparent hover:border-yellow-400 transition-all duration-300 flex flex-col justify-center items-center"
                            >
                                <div className="flex justify-center">
                                    <Image
                                        src={region.imgSrc}
                                        alt={region.name}
                                        width={100}
                                        height={100}
                                        className="mb-4"
                                    />
                                </div>
                                <h3 className="text-white font-bold">{region.name}</h3>
                                <p className="text-white">{region.region}</p>

                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#003476] to-blue-500 text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <h3 className="text-white font-bold">{region.name}</h3>
                                    <p className="text-white">{region.region}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mapasaude;
