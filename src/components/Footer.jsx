import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gray-800 px-4 py-8 text-white md:px-24 lg:px-48 xl:px-72">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
                <p className="mb-4 text-lg md:mb-0">
                    &copy; 2024 Zadkiel Troche.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/zadkiel-troche"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-2xl" />
                    </a>
                    <a
                        href="https://linkedin.com/in/zadkiel-troche"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                        href="https://twitter.com/_zadkielt"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a
                        href="/politicas-privacidad"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Política de Privacidad
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
