import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  Mail,
  Search,
  Trash2,
  ExternalLink,
  RefreshCw,
  Send
} from 'lucide-react';

export default function MessageManagementModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({ total: 0, unread: 0, read: 0 });
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRead, setFilterRead] = useState('all'); // 'all', 'unread', 'read'
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyBody, setReplyBody] = useState('');
  const [replying, setReplying] = useState(false);
  const [replyStatus, setReplyStatus] = useState('');

  const adminToken = typeof window !== 'undefined' ? (localStorage.getItem('ravi-admin-token') || '') : '';

  const fetchMessages = useCallback(async () => {
    if (!isOpen) return;
    setLoading(true);

    const headers = { 'Content-Type': 'application/json' };
    if (adminToken) {
      headers['Authorization'] = `Bearer ${adminToken}`;
    }

    try {
      let url = '/api/messages/';
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.append('search', searchQuery.trim());
      if (filterRead === 'unread') params.append('is_read', 'false');
      if (filterRead === 'read') params.append('is_read', 'true');
      if (params.toString()) url += `?${params.toString()}`;

      let response;
      try {
        response = await fetch(url, { headers });
      } catch {
        response = await fetch(`http://127.0.0.1:8000${url}`, { headers });
      }

      if (response && (response.status === 401 || response.status === 403)) {
        setLoading(false);
        return;
      }

      if (response && response.ok) {
        const data = await response.json();
        setMessages(data.results || []);
        setStats({
          total: data.count || 0,
          unread: data.unread_count || 0,
          read: (data.count || 0) - (data.unread_count || 0)
        });
      }
    } catch {
      // Backend not currently reachable
    } finally {
      setLoading(false);
    }
  }, [isOpen, searchQuery, filterRead, adminToken]);

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen, fetchMessages]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMessages();
  };

  const handleToggleRead = async (msg) => {
    const newStatus = !msg.is_read;
    const headers = { 'Content-Type': 'application/json' };
    if (adminToken) headers['Authorization'] = `Bearer ${adminToken}`;

    try {
      let response;
      try {
        response = await fetch(`/api/messages/${msg.id}/`, {
          method: 'PATCH',
          headers,
          body: JSON.stringify({ is_read: newStatus })
        });
      } catch {
        response = await fetch(`http://127.0.0.1:8000/api/messages/${msg.id}/`, {
          method: 'PATCH',
          headers,
          body: JSON.stringify({ is_read: newStatus })
        });
      }

      if (response && response.ok) {
        setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, is_read: newStatus } : m));
        if (selectedMessage && selectedMessage.id === msg.id) {
          setSelectedMessage(prev => ({ ...prev, is_read: newStatus }));
        }
        fetchMessages();
      }
    } catch {
      // ignore
    }
  };

  const handleDelete = async (msgId) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;

    const headers = {};
    if (adminToken) headers['Authorization'] = `Bearer ${adminToken}`;

    try {
      let response;
      try {
        response = await fetch(`/api/messages/${msgId}/`, { method: 'DELETE', headers });
      } catch {
        response = await fetch(`http://127.0.0.1:8000/api/messages/${msgId}/`, { method: 'DELETE', headers });
      }

      if (response && (response.status === 204 || response.ok)) {
        setMessages(prev => prev.filter(m => m.id !== msgId));
        if (selectedMessage && selectedMessage.id === msgId) {
          setSelectedMessage(null);
        }
        fetchMessages();
      }
    } catch {
      // ignore
    }
  };

  const handleSendReply = async () => {
    if (!selectedMessage || !replyBody.trim()) return;
    setReplying(true);
    setReplyStatus('');

    const headers = { 'Content-Type': 'application/json' };
    if (adminToken) headers['Authorization'] = `Bearer ${adminToken}`;

    try {
      let response;
      try {
        response = await fetch(`/api/messages/${selectedMessage.id}/reply/`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ reply_body: replyBody.trim() })
        });
      } catch {
        response = await fetch(`http://127.0.0.1:8000/api/messages/${selectedMessage.id}/reply/`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ reply_body: replyBody.trim() })
        });
      }

      if (response && response.ok) {
        setReplyStatus('Reply sent successfully!');
        setReplyBody('');
        fetchMessages();
      } else {
        const data = await response.json().catch(() => ({}));
        setReplyStatus(data.error || 'Failed to dispatch reply.');
      }
    } catch {
      setReplyStatus('Network error while dispatching reply.');
    } finally {
      setReplying(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99995,
        background: 'rgba(3, 5, 8, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          background: 'var(--theme-surface)',
          border: '1px solid var(--theme-border)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 40px var(--theme-gold-glow)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: '0px'
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            padding: '18px 24px',
            borderBottom: '1px solid var(--theme-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--theme-surface-secondary)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid var(--theme-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--theme-accent)'
              }}
            >
              <Mail size={18} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--theme-text)', margin: 0 }}>
                Contact Messages Management
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--theme-text-secondary)', margin: 0 }}>
                DJANGO POSTGRESQL TRANSMISSION DESK
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="http://127.0.0.1:8000/admin/App/contactmessage/"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-target"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: '#FEDB6A',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid #D4AF37',
                textDecoration: 'none'
              }}
            >
              <span>DJANGO ADMIN</span>
              <ExternalLink size={13} />
            </a>

            <button
              onClick={onClose}
              className="interactive-target"
              aria-label="Close message manager"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--theme-text)',
                cursor: 'pointer',
                padding: '6px'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div
          style={{
            padding: '12px 24px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid var(--theme-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>
              TOTAL: <strong style={{ color: 'var(--theme-text)' }}>{stats.total}</strong>
            </span>
            <span>
              UNREAD: <strong style={{ color: '#00D2FF' }}>{stats.unread}</strong>
            </span>
            <span>
              READ: <strong style={{ color: '#10B981' }}>{stats.read}</strong>
            </span>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {['all', 'unread', 'read'].map(mode => (
              <button
                key={mode}
                onClick={() => setFilterRead(mode)}
                style={{
                  padding: '3px 10px',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  border: `1px solid ${filterRead === mode ? 'var(--theme-accent)' : 'var(--theme-border)'}`,
                  background: filterRead === mode ? 'var(--theme-accent)' : 'transparent',
                  color: filterRead === mode ? '#000000' : 'var(--theme-text-secondary)',
                  cursor: 'pointer'
                }}
              >
                {mode}
              </button>
            ))}

            <button
              onClick={fetchMessages}
              title="Refresh messages"
              style={{
                padding: '3px 8px',
                border: '1px solid var(--theme-border)',
                background: 'transparent',
                color: 'var(--theme-text)',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ padding: '12px 24px', borderBottom: '1px solid var(--theme-border)' }}>
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '8px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <input
                type="text"
                placeholder="Search by name, email, or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px 8px 32px',
                  background: 'var(--theme-surface-secondary)',
                  border: '1px solid var(--theme-border)',
                  color: 'var(--theme-text)',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none'
                }}
              />
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--theme-text-secondary)' }} />
            </div>
            <button
              type="submit"
              style={{
                padding: '8px 16px',
                background: 'var(--theme-primary)',
                color: '#FFFFFF',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}
            >
              SEARCH
            </button>
          </form>
        </div>

        {/* Body Layout: Master-Detail List */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.2fr', overflow: 'hidden' }}>
          {/* Messages Column */}
          <div style={{ borderRight: '1px solid var(--theme-border)', overflowY: 'auto', maxHeight: '55vh' }}>
            {loading ? (
              <div style={{ padding: '30px', textAlign: 'center', color: 'var(--theme-text-secondary)', fontFamily: 'var(--font-mono)' }}>
                LOADING TRANSMISSIONS...
              </div>
            ) : messages.length === 0 ? (
              <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--theme-text-secondary)' }}>
                <Mail size={32} style={{ opacity: 0.3, marginBottom: '10px' }} />
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>No messages found in database.</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--theme-text-secondary)' }}>
                  Submit a test transmission through the contact form to see it appear here.
                </p>
              </div>
            ) : (
              messages.map(msg => (
                <div
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg)}
                  style={{
                    padding: '14px 18px',
                    borderBottom: '1px solid var(--theme-border)',
                    cursor: 'pointer',
                    background: selectedMessage?.id === msg.id
                      ? 'rgba(212, 175, 55, 0.1)'
                      : (!msg.is_read ? 'rgba(0, 210, 255, 0.04)' : 'transparent'),
                    borderLeft: !msg.is_read ? '3px solid #00D2FF' : '3px solid transparent',
                    transition: 'background 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--theme-text)' }}>
                      {msg.name}
                    </span>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-text-secondary)' }}>
                      {new Date(msg.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--theme-accent)', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {msg.subject}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--theme-text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {msg.message}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Message Detail Column */}
          <div style={{ padding: '20px', overflowY: 'auto', maxHeight: '55vh', background: 'var(--theme-surface)' }}>
            {selectedMessage ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '3px 8px',
                      background: selectedMessage.is_read ? 'rgba(16, 185, 129, 0.15)' : 'rgba(0, 210, 255, 0.15)',
                      border: `1px solid ${selectedMessage.is_read ? '#10B981' : '#00D2FF'}`,
                      color: selectedMessage.is_read ? '#10B981' : '#00D2FF'
                    }}
                  >
                    {selectedMessage.is_read ? 'STATUS: READ' : 'STATUS: UNREAD'}
                  </span>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleToggleRead(selectedMessage)}
                      style={{
                        padding: '4px 8px',
                        background: 'transparent',
                        border: '1px solid var(--theme-border)',
                        color: 'var(--theme-text)',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        cursor: 'pointer'
                      }}
                    >
                      {selectedMessage.is_read ? 'MARK UNREAD' : 'MARK READ'}
                    </button>
                    <button
                      onClick={() => handleDelete(selectedMessage.id)}
                      style={{
                        padding: '4px 8px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid #EF4444',
                        color: '#EF4444',
                        fontSize: '0.72rem',
                        cursor: 'pointer'
                      }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--theme-text)', marginBottom: '4px' }}>
                    {selectedMessage.subject}
                  </h4>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-accent)' }}>
                    {selectedMessage.name} &lt;{selectedMessage.email}&gt;
                  </div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-text-secondary)', marginTop: '2px' }}>
                    Received: {new Date(selectedMessage.created_at).toLocaleString()}
                    {selectedMessage.replied_at && ` • Replied: ${new Date(selectedMessage.replied_at).toLocaleString()}`}
                  </div>
                </div>

                <div
                  style={{
                    padding: '16px',
                    background: 'var(--theme-surface-secondary)',
                    border: '1px solid var(--theme-border)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    color: 'var(--theme-text)',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {selectedMessage.message}
                </div>

                {/* Email Reply Section */}
                <div style={{ marginTop: '10px', paddingTop: '14px', borderTop: '1px solid var(--theme-border)' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--theme-accent)', marginBottom: '6px' }}>
                    REPLY VIA EMAIL TO {selectedMessage.email}:
                  </label>
                  <textarea
                    rows="3"
                    value={replyBody}
                    onChange={(e) => setReplyBody(e.target.value)}
                    placeholder="Type your response here..."
                    style={{
                      width: '100%',
                      padding: '10px',
                      background: 'var(--theme-surface-secondary)',
                      border: '1px solid var(--theme-border)',
                      color: 'var(--theme-text)',
                      fontSize: '0.84rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                    {replyStatus && (
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: replyStatus.includes('success') ? '#10B981' : '#EF4444' }}>
                        {replyStatus}
                      </span>
                    )}
                    <button
                      onClick={handleSendReply}
                      disabled={replying || !replyBody.trim()}
                      className="futuristic-btn futuristic-btn-primary"
                      style={{
                        padding: '6px 16px',
                        fontSize: '0.74rem',
                        marginLeft: 'auto'
                      }}
                    >
                      <Send size={13} />
                      <span>{replying ? 'DISPATCHING...' : 'SEND EMAIL REPLY'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--theme-text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
                SELECT A TRANSMISSION TO VIEW DETAILS
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
