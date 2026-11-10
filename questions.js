const rawQuestions = [
  {
    question: "61. ¿Qué conector se utiliza con el cableado de par trenzado en una LAN Ethernet?",
    imageHtml: `
      <div style="background:#0f172a; padding:15px; border-radius:8px; border:1px solid #1f2937;">
        <svg viewBox="0 0 300 120" style="width:100%; max-width:280px; display:block; margin:0 auto;">
          <rect x="90" y="20" width="120" height="80" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <rect x="110" y="5" width="80" height="15" rx="2" fill="#334155"/>
          <line x1="105" y1="70" x2="105" y2="95" stroke="#eab308" stroke-width="3"/>
          <line x1="117" y1="70" x2="117" y2="95" stroke="#eab308" stroke-width="3"/>
          <line x1="129" y1="70" x2="129" y2="95" stroke="#eab308" stroke-width="3"/>
          <line x1="141" y1="70" x2="141" y2="95" stroke="#eab308" stroke-width="3"/>
          <line x1="153" y1="70" x2="153" y2="95" stroke="#eab308" stroke-width="3"/>
          <line x1="165" y1="70" x2="165" y2="95" stroke="#eab308" stroke-width="3"/>
          <line x1="177" y1="70" x2="177" y2="95" stroke="#eab308" stroke-width="3"/>
          <line x1="189" y1="70" x2="189" y2="95" stroke="#eab308" stroke-width="3"/>
          <text x="150" y="50" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Conector RJ-45</text>
        </svg>
      </div>
    `,
    options: [
      "Conector BNC Coaxial",
      "Conector RJ-11",
      "Conector LC de fibra óptica",
      "Conector RJ-45"
    ],
    answers: ["Conector RJ-45"],
    explanation: "El conector RJ-45 (8P8C) es el estándar utilizado para el cableado de par trenzado en redes LAN Ethernet."
  },
  {
    question: "62. Consulte la ilustración. ¿Cuál es el problema con la terminación que se muestra?",
    imageHtml: `
      <div style="background:#0f172a; padding:15px; border-radius:8px; border:1px solid #1f2937;">
        <svg viewBox="0 0 320 120" style="width:100%; max-width:300px; display:block; margin:0 auto;">
          <rect x="180" y="25" width="100" height="70" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <path d="M 30 60 L 110 60" stroke="#22c55e" stroke-width="16"/>
          <line x1="110" y1="40" x2="180" y2="40" stroke="#ef4444" stroke-width="2.5"/>
          <line x1="110" y1="50" x2="180" y2="50" stroke="#38bdf8" stroke-width="2.5"/>
          <line x1="110" y1="60" x2="180" y2="60" stroke="#eab308" stroke-width="2.5"/>
          <line x1="110" y1="70" x2="180" y2="70" stroke="#a855f7" stroke-width="2.5"/>
          <line x1="110" y1="80" x2="180" y2="80" stroke="#34d399" stroke-width="2.5"/>
        </svg>
      </div>
    `,
    options: [
      "Los cables son demasiado gruesos para el conector que se utiliza.",
      "Se está utilizando el tipo de conector incorrecto.",
      "No se debería haber quitado la malla de cobre tejida.",
      "La longitud de la parte sin trenzar de cada cable es demasiado larga."
    ],
    answers: ["La longitud de la parte sin trenzar de cada cable es demasiado larga."],
    explanation: "La cubierta protectora del cable UTP debe ingresar al conector RJ-45. Dejar los hilos expuestos sin destrenzar genera diafonía."
  },
  {
    question: "92. Consulte la ilustración. ¿Cuáles son los tres hechos que se pueden determinar a partir del resultado visible del comando show ip interface brief? (Elija tres opciones.)",
    imageHtml: `
      <div style="background:#000; color:#fff; font-family:monospace; padding:12px; border-radius:6px; text-align:left; font-size:11px; border:1px solid #1f2937;">
        Switch# show ip interface brief<br>
        Interface &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IP-Address &nbsp;&nbsp;&nbsp; OK? Method Status &nbsp;&nbsp;&nbsp; Protocol<br>
        FastEthernet0/1 &nbsp; unassigned &nbsp;&nbsp; YES manual up &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; up<br>
        FastEthernet0/2 &nbsp; unassigned &nbsp;&nbsp; YES manual down &nbsp;&nbsp;&nbsp;&nbsp; down<br>
        Vlan1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 192.168.11.3 &nbsp; YES manual up &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; up
      </div>
    `,
    options: [
      "El switch se puede administrar de manera remota.",
      "Un dispositivo está conectado a una interfaz física.",
      "Se configuraron contraseñas en el switch.",
      "Se configuró la SVI predeterminada.",
      "Dos dispositivos están conectados al switch.",
      "Se configuraron dos interfaces físicas."
    ],
    answers: [
      "El switch se puede administrar de manera remota.",
      "Un dispositivo está conectado a una interfaz física.",
      "Se configuró la SVI predeterminada."
    ],
    explanation: "Vlan1 tiene IP activa permitiendo administración remota. FastEthernet0/1 está activa en up/up."
  }
];
