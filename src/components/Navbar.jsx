import React from 'react';
import { ShoppingBag, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const { cart, setIsCartOpen } = useCart();

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 1px 0 rgba(0,0,0,0.05)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <Link to="/" style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#D97706',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                letterSpacing: '-0.02em'
            }}>
                <span style={{ fontSize: '1.6rem' }}>🐔</span>
                <span style={{ color: '#111827' }}>{t('brandName').split(" ")[0]}</span>
                <span style={{ color: '#D97706' }}>Broilers</span>
            </Link>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleLanguage}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.6rem 0.8rem',
                        borderRadius: '2rem',
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: '1px solid transparent'
                    }}
                >
                    <Globe size={16} />
                    <span>{language === 'en' ? 'TA' : 'EN'}</span>
                </motion.button>

                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsCartOpen(true)}
                    style={{
                        position: 'relative',
                        padding: '0.6rem',
                        backgroundColor: '#111827',
                        borderRadius: '50%',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <ShoppingBag size={20} />
                    {cartCount > 0 && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={{
                                position: 'absolute',
                                top: '-2px',
                                right: '-2px',
                                backgroundColor: '#EF4444',
                                color: 'white',
                                fontSize: '0.7rem',
                                width: '18px',
                                height: '18px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                boxShadow: '0 0 0 2px white'
                            }}
                        >
                            {cartCount}
                        </motion.span>
                    )}
                </motion.button>
            </div>
        </nav>
    );
};

export default Navbar;
