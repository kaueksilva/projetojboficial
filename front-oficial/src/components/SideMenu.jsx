"use client";

import React from 'react';
import Link from 'next/link';

const menuItems = [
  { name: 'Gestão Urbana', href: '/carta_de_servico/gestao-urbana' },
  { name: 'Animais', href: '/carta_de_servico/animais' },
  { name: 'Defesa do Consumidor', href: '/carta_de_servico/defesa-do-consumidor' },
  { name: 'Serviços de Direitos Humanos', href: '/carta_de_servico/servicos-direitos-humanos' },
  // Adicione os demais itens do menu aqui com suas respectivas rotas...
];

const SideMenu = ({ activeItem }) => {
  return (
    <div className="w-1/3 bg-gray-100 p-4 ">
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

export default SideMenu;
