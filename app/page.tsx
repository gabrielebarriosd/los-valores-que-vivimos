"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 space-y-8"
      >
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800"
        >
          Taller: "Los valores que vivimos"
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-600 text-justify leading-relaxed"
        >
          El taller <b>"Los valores que vivimos"</b> busca abrir un espacio de
          reflexión y participación, en el que cada persona pueda reconocer los
          valores que ya practica, aquellos que quizá ha dejado de lado y la
          importancia de fortalecerlos en su vida cotidiana.
          <br />
          <br />
          <span className="font-semibold text-purple-600">
            ¡Ven y sé parte de esta experiencia!
          </span>
          <br />
          <br />
          Te esperamos en el <b>IMCED</b>, ubicado en Calzada Juárez #1600,
          Morelia, Michoacán. Aula 26.
          <br />
          <br />
          Día <b>13 de septiembre de 2025</b>, de 12:30 p. m. a 2:00 p. m.
          <br />
          <br />
          Dirigido a toda la comunidad <b>IMCED</b>.

        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="text-right max-w-72 ml-auto">
            Llámanos, el cupo es limitado<br />
            <Link href="tel:4434829474" className="text-blue-600 hover:underline">443-482-9474</Link>
          </div>
        </motion.div>
        {/* Lista de elementos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-gray-700">Talleristas</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Zitlaliht Camargo</li>
            <li>Gabriela Herrera</li>
          </ul>
        </motion.div>
      </motion.div>
    </main>
  );
}
