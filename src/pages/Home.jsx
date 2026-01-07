import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ArrowRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const { t, language } = useLanguage();
    const { addToCart } = useCart();
    const [filter, setFilter] = useState('all'); // 'all', 'live', 'fresh'

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div style={{ paddingBottom: '6rem', minHeight: '100vh', backgroundColor: '#FAFAFA' }}>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                    color: 'white',
                    padding: '4rem 2rem 5rem',
                    borderRadius: '0 0 2.5rem 2.5rem',
                    marginBottom: '2rem',
                    boxShadow: '0 10px 30px -10px rgba(245, 158, 11, 0.5)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        marginBottom: '0.75rem',
                        lineHeight: 1.1,
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        {t('freshMeat')} <br /> <span style={{ opacity: 0.8, fontSize: '0.8em' }}>& {t('liveChicken')}</span>
                    </h1>
                    <p style={{ opacity: 0.95, marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '80%' }}>
                        Premium quality, farm-fresh delivered straight to your kitchen.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            backgroundColor: 'white',
                            color: '#D97706',
                            padding: '0.9rem 2rem',
                            borderRadius: '3rem',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                            border: 'none',
                            fontSize: '1rem'
                        }}
                    >
                        {t('orderNow')} <ArrowRight size={20} />
                    </motion.button>
                </div>

                {/* Abstract Pattern Overlay */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }} />
            </motion.div>

            {/* Categories Filter */}
            <div style={{ padding: '0 1.5rem', marginBottom: '2.5rem', marginTop: '-3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[
                        { id: 'live', icon: '🐓', label: 'liveChicken' },
                        { id: 'fresh', icon: '🥩', label: 'freshMeat' }
                    ].map((cat) => (
                        <motion.div
                            key={cat.id}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFilter(filter === cat.id ? 'all' : cat.id)}
                            style={{
                                backgroundColor: filter === cat.id ? '#111827' : 'white',
                                color: filter === cat.id ? 'white' : '#1F2937',
                                padding: '1.5rem',
                                borderRadius: '1.5rem',
                                textAlign: 'center',
                                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '140px'
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '0.5rem', filter: filter === cat.id ? 'none' : 'grayscale(20%)' }}>
                                {cat.icon}
                            </div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.02em' }}>{t(cat.label)}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Product List */}
            <div style={{ padding: '0 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>
                        {filter === 'all' ? 'Popular Items' : (filter === 'live' ? t('liveChicken') : t('freshMeat'))}
                    </h2>
                    {filter !== 'all' && (
                        <span
                            onClick={() => setFilter('all')}
                            style={{ fontSize: '0.9rem', color: '#D97706', fontWeight: 600, cursor: 'pointer' }}
                        >
                            Show All
                        </span>
                    )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '1.5rem',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
                                    border: '1px solid #F3F4F6',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                    <img
                                        src={product.image}
                                        alt={language === 'ta' ? product.name_ta : product.name_en}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        right: '10px',
                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                        backdropFilter: 'blur(4px)',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                    }}>
                                        <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600 }}>PRICE</span>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#059669' }}>₹{product.price}</span>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1F2937' }}>
                                        {language === 'ta' ? product.name_ta : product.name_en}
                                    </h3>
                                    <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                                        {language === 'ta' ? product.description_ta : product.description_en}
                                    </p>
                                    <motion.button
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => addToCart(product)}
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#111827',
                                            color: 'white',
                                            padding: '1rem',
                                            borderRadius: '1rem',
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.6rem',
                                            fontSize: '1rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Plus size={20} /> {t('addToCart')}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Home;
