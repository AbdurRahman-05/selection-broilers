import React from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const CartDrawer = () => {
    const { cart, removeFromCart, updateQuantity, total, isCartOpen, setIsCartOpen } = useCart();
    const { t, language } = useLanguage();

    if (!isCartOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'flex-end'
        }}>
            {/* Backdrop */}
            <div
                onClick={() => setIsCartOpen(false)}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(2px)'
                }}
            />

            {/* Drawer */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                height: '100%',
                backgroundColor: 'white',
                boxShadow: '-4px 0 16px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                animation: 'slideIn 0.3s ease-out'
            }}>
                <div style={{
                    padding: '1.5rem',
                    borderBottom: '1px solid #E5E7EB',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{t('cart')} ({cart.length})</h2>
                    <button onClick={() => setIsCartOpen(false)} style={{ padding: '0.5rem' }}>
                        <X size={24} />
                    </button>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
                    {cart.length === 0 ? (
                        <div style={{ textAlign: 'center', color: '#6B7280', marginTop: '3rem' }}>
                            <p>Your cart is empty.</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                style={{ marginTop: '1rem', color: 'var(--color-primary)', fontWeight: 600 }}
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {cart.map(item => (
                                <div key={item.id} style={{ display: 'flex', gap: '1rem' }}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{ width: '80px', height: '80px', borderRadius: '0.5rem', objectFit: 'cover' }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                                            {language === 'ta' ? item.name_ta : item.name_en}
                                        </h4>
                                        <div style={{ color: 'var(--color-primary-dark)', fontWeight: 500, marginBottom: '0.5rem' }}>
                                            ₹{item.price} / {item.unit}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '0.5rem'
                                            }}>
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    style={{ padding: '0.25rem 0.5rem' }}
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span style={{ padding: '0 0.5rem', fontWeight: 500 }}>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    style={{ padding: '0.25rem 0.5rem' }}
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                style={{ color: '#EF4444', padding: '0.5rem' }}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div style={{ padding: '1.5rem', borderTop: '1px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>
                            <span>{t('total')}</span>
                            <span>₹{total}</span>
                        </div>
                        <button style={{
                            width: '100%',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            padding: '1rem',
                            borderRadius: '0.75rem',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}>
                            {t('checkout')}
                        </button>
                    </div>
                )}
            </div>
            <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
        </div>
    );
};

export default CartDrawer;
