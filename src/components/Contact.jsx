import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // 🤖 SYSTÈME DE CAPTCHA ANTI-BOT
  const [captcha, setCaptcha] = useState({ question: '', answer: 0 });
  const [userCaptchaAnswer, setUserCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  // Configuration EmailJS
  const EMAILJS_SERVICE_ID = 'service_zdilobj';
  const EMAILJS_TEMPLATE_ID = 'template_jx8q69r';
  const EMAILJS_PUBLIC_KEY = 'xgPM-KaKKZw7N_YG8';

  // 🧮 GÉNÉRATION DU CAPTCHA MATHÉMATIQUE
  const generateCaptcha = () => {
    const operations = [
      { op: '+', symbol: '+' },
      { op: '-', symbol: '-' },
      { op: '*', symbol: '×' }
    ];
    
    const randomOp = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, answer;
    
    switch (randomOp.op) {
      case '+':
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 30) + 10;
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = num1 * num2;
        break;
      default:
        num1 = 5;
        num2 = 3;
        answer = 8;
    }
    
    setCaptcha({
      question: `${num1} ${randomOp.symbol} ${num2} = ?`,
      answer: answer
    });
    setUserCaptchaAnswer('');
    setCaptchaError('');
  };

  // Générer le captcha au chargement
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCaptchaChange = (e) => {
    setUserCaptchaAnswer(e.target.value);
    setCaptchaError('');
  };

  // 🛡️ VALIDATION DU CAPTCHA
  const validateCaptcha = () => {
    const userAnswer = parseInt(userCaptchaAnswer);
    if (isNaN(userAnswer) || userAnswer !== captcha.answer) {
      setCaptchaError('🤖 Réponse incorrecte ! Êtes-vous un humain ?');
      generateCaptcha(); // Régénère le captcha en cas d'erreur
      return false;
    }
    return true;
  };

  // 🕐 HONEYPOT TEMPOREL - Enregistre le temps de début
  useEffect(() => {
    sessionStorage.setItem('formStartTime', Date.now().toString());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setCaptchaError('');

    // 1. Vérifier le captcha d'abord
    if (!validateCaptcha()) {
      setIsSubmitting(false);
      return;
    }

    // 2. Protection anti-spam temporelle (honeypot temporel)
    const formStartTime = sessionStorage.getItem('formStartTime');
    const currentTime = Date.now();
    if (!formStartTime || (currentTime - parseInt(formStartTime)) < 3000) {
      setError('🤖 Soumission trop rapide ! Veuillez attendre quelques secondes.');
      setIsSubmitting(false);
      generateCaptcha();
      return;
    }

    // 3. Vérifier le honeypot invisible
    const honeypotField = document.querySelector('input[name="website"]');
    if (honeypotField && honeypotField.value !== '') {
      setError('🤖 Détection de bot ! Accès refusé.');
      setIsSubmitting(false);
      generateCaptcha();
      return;
    }

    // Ajouter timestamp et infos supplémentaires pour un email plus stylé
    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      portfolio_url: window.location.origin,
      captcha_verified: '✅ Captcha validé - Utilisateur humain'
    };

    try {
      // Envoi via EmailJS avec données enrichies
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Email stylé envoyé avec succès:', result.text);
      
      // Reset du formulaire
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
      });
      setUserCaptchaAnswer('');
      
      setSubmitted(true);
      generateCaptcha(); // Nouveau captcha pour la prochaine utilisation
      
      // Cacher le message de succès après 60 secondes
      setTimeout(() => {
        setSubmitted(false);
      }, 60000);

    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error);
      setError('Erreur lors de l\'envoi du message. Veuillez réessayer ou utilisez l\'email direct.');
      generateCaptcha(); // Nouveau captcha en cas d'erreur
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "yoann.sogoyou.pro@gmail.com",
      link: "mailto:yoann.sogoyou.pro@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Yoann Sogoyou",
      link: "https://linkedin.com/in/yoann-sogoyou",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "Sogoyou8",
      link: "https://github.com/sogoyou8",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: "📱",
      title: "Téléphone",
      value: "+33 7 81 85 83 92",
      link: "tel:+33781858392",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 py-20 relative overflow-hidden">
      {/* Effets de fond cyber */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-10 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-1 h-20 bg-cyan-400"></div>
        <div className="absolute top-10 left-10 w-20 h-1 bg-cyan-400"></div>
        <div className="absolute top-32 right-20 w-1 h-16 bg-purple-400"></div>
        <div className="absolute top-32 right-36 w-16 h-1 bg-purple-400"></div>
        <div className="absolute bottom-20 left-20 w-1 h-24 bg-green-400"></div>
        <div className="absolute bottom-20 left-20 w-24 h-1 bg-green-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Titre CYBER */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6 animate-float">
              CONTACT
            </h2>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-30 animate-pulse"></div>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>
            <span className="text-3xl animate-bounce">📡</span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            <span className="text-gradient-cyber font-bold">CONNEXION ÉTABLIE</span> • 
            Prêt à discuter de <span className="text-cyan-400 font-bold">PROJETS ÉPIQUES</span> ensemble ?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulaire CYBER avec CAPTCHA */}
          <div className="animate-slideInLeft">
            <div className="form-rockstar relative overflow-hidden w-full max-w-[95vw] sm:max-w-md mx-auto">
              {/* Effet de scan */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transform -translate-x-full animate-slide" style={{animationDuration: '3s'}}></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-3xl font-black text-white mb-8 flex flex-wrap items-center gap-x-2">
                  <span className="text-4xl mr-3 animate-bounce">🚀</span>
                  <span className="break-words">ENVOYEZ UN MESSAGE</span>
                  <span className="ml-0 sm:ml-3 block sm:inline text-lg text-cyan-400 whitespace-nowrap">🛡️ Protégé</span>                </h3>
                {submitted ? (
                  <div className="text-center py-12 animate-fadeInUp">
                    <div className="text-6xl mb-4 animate-bounce">✅</div>
                    <h4 className="text-2xl font-bold text-green-400 mb-2">MESSAGE ENVOYÉ !</h4>
                    <p className="text-gray-300 mb-4">Je vous répondrai dans les plus brefs délais.</p>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        generateCaptcha();
                      }}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors underline font-medium"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-4 animate-fadeInUp">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">⚠️</span>
                          <span>{error}</span>
                        </div>
                      </div>
                    )}

                    {/* 🕳️ HONEYPOT INVISIBLE (piège à bots) */}
                    <input
                      type="text"
                      name="website"
                      style={{ display: 'none' }}
                      tabIndex="-1"
                      autoComplete="off"
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="text-gray-300 mb-2 font-bold flex items-center">
                          <span className="text-xl mr-2">👤</span>
                          Nom complet
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleChange}
                          placeholder="Votre nom..."
                          className="input-rockstar  group-hover:border-cyan-400/70"
                          required
                        />
                      </div>
                      
                      <div className="group">
                        <label className="text-gray-300 mb-2 font-bold flex items-center">
                          <span className="text-xl mr-2">📧</span>
                          Email
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          value={formData.user_email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          className="input-rockstar group-hover:border-cyan-400/70"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="text-gray-300 mb-2 font-bold flex items-center">
                        <span className="text-xl mr-2">💡</span>
                        Sujet
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet de votre message..."
                        className="input-rockstar group-hover:border-cyan-400/70"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label className="text-gray-300 mb-2 font-bold flex items-center">
                        <span className="text-xl mr-2">💬</span>
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Votre message..."
                        className="input-rockstar resize-none group-hover:border-cyan-400/70"
                        required
                      ></textarea>
                    </div>

                    {/* 🤖 CAPTCHA ANTI-BOT */}
                    <div className="group">
                      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-4 sm:p-6">
                        <label className="text-gray-300 mb-4 font-bold flex flex-wrap items-center text-base sm:text-lg">
                          <span className="text-2xl mr-3">🤖</span>
                          <span className="break-words">Vérification Anti-Bot</span>
                          <span className="ml-0 sm:ml-2 block w-full sm:w-auto text-cyan-400 text-sm whitespace-normal text-right sm:text-left">
                            (Prouvez que vous êtes humain)
                          </span>
                        </label>
                        <div className="flex flex-col xs:flex-row xs:items-center gap-3 xs:gap-4 w-full">
                          <div className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-center min-w-[100px] xs:min-w-[120px]">
                            <span className="text-xl font-black text-cyan-400 font-mono">
                              {captcha.question}
                            </span>
                          </div>
                          <input
                            type="number"
                            value={userCaptchaAnswer}
                            onChange={handleCaptchaChange}
                            placeholder="Réponse"
                            className="input-rockstar w-full xs:w-24 text-center font-mono text-lg"
                            required
                          />
                          <button
                            type="button"
                            onClick={generateCaptcha}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
                            title="Nouveau calcul"
                          >
                            🔄
                          </button>
                        </div>
                        {captchaError && (
                          <p className="text-red-400 text-sm mt-2 flex items-center">
                            <span className="mr-2">❌</span>
                            {captchaError}
                          </p>
                        )}
                        <div className="mt-3 text-xs text-gray-400 flex items-center">
                          <span className="mr-2">💡</span>
                          Résolvez cette opération mathématique pour continuer
                        </div>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || !userCaptchaAnswer}
                      className="group relative w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-black font-black text-lg py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-glow-cyber disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center justify-center space-x-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            <span>ENVOI EN COURS...</span>
                          </>
                        ) : (
                          <>
                            <span className="text-2xl group-hover:animate-bounce">🚀</span>
                            <span>ENVOYER LE MESSAGE</span>
                            <span className="text-2xl group-hover:animate-bounce" style={{animationDelay: '0.2s'}}>⚡</span>
                          </>
                        )}
                      </div>
                      
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse rounded-xl"></div>
                    </button>

                    {/* Indicateur de sécurité */}
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                        <span>🔒</span>
                        <span>Formulaire sécurisé contre les bots</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="animate-slideInRight space-y-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-8 flex items-center">
                <span className="text-4xl mr-3 animate-pulse">📡</span>
                COORDONNÉES
              </h3>
              
              <div className="grid gap-3 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full max-w-[95vw] sm:max-w-md bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Effet de glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
                    
                    <div className="relative flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                          {info.title}
                        </h4>
                          <p className="text-gray-300 group-hover:text-white transition-colors duration-300 break-all">
                          {info.value}
                        </p>
                      </div>
                      <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Disponibilité - Élargie pour occuper l'espace */}
            <div className="form-rockstar relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-emerald-500/5 to-teal-500/5 animate-pulse"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-black text-white mb-6 flex items-center">
                  <span className="text-3xl mr-3 animate-pulse">💼</span>
                  DISPONIBILITÉ
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    <span className="text-gray-300 font-medium text-lg">Recherche active d'alternance</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 font-medium text-lg">Disponible dès septembre 2025</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 font-medium text-lg">Ouvert aux missions freelance</span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20">
                  <p className="text-emerald-400 font-medium text-center">
                    🎯 <span className="font-bold">Objectif :</span> Rejoindre une équipe dynamique pour développer des projets innovants !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center mt-20 animate-fadeInUp">
          <div className="relative inline-block">
            <p className="text-2xl text-gray-300 mb-8 font-light">
              Une idée de projet ? Une opportunité d'alternance ?
            </p>
            
            <a 
              href="mailto:yoann.sogoyou.pro@gmail.com"
              className="btn-cyber text-xl"
            >
              <span className="text-2xl group-hover:animate-bounce">📧</span>
              <span>CONTACTEZ-MOI</span>
              <span className="text-2xl group-hover:animate-bounce" style={{animationDelay: '0.2s'}}>⚡</span>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse rounded-xl"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;