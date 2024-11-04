"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const menuItems = [
  { name: 'Gestão Urbana', href: '/carta_de_servico/gestao-urbana' },
  { name: 'Animais', href: '/carta_de_servico/animais' },
  { name: 'Defesa do Consumidor', href: '/carta_de_servico/defesa-do-consumidor' },
  { name: 'Serviços de Direitos Humanos', href: '/carta_de_servico/servicos-direitos-humanos' },
  // Adicione os demais itens do menu aqui com suas respectivas rotas...
];

// Carrega este componente dinamicamente para garantir que só é renderizado no cliente
const SideMenu = () => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const { pathname } = window.location;
    setActiveItem(menuItems.find(item => item.href === pathname)?.name);
  }, []);

  return (
    <div className="w-1/3 bg-gray-100 p-4">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`p-2 rounded ${
              activeItem === item.name ? 'bg-[#224276] text-white font-bold' : 'hover:bg-[#224276] hover:text-white'
            }`}
          >
            <Link href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SideMenu), { ssr: false });
