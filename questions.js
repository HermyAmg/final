const rawQuestions = [
  {
    question: "61. ¿Qué conector se utiliza con el cableado de par trenzado en una LAN Ethernet?",
    imageHtml: `
      <div style="background:#0b0f19; padding:20px; border-radius:8px; border:1px solid #1f2937;">
        <svg viewBox="0 0 400 160" style="width:100%; max-width:320px; display:block; margin:0 auto;">
          <rect x="130" y="30" width="140" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <rect x="150" y="10" width="100" height="20" rx="3" fill="#334155"/>
          <!-- Pines RJ-45 -->
          <line x1="150" y1="90" x2="150" y2="120" stroke="#eab308" stroke-width="4"/>
          <line x1="164" y1="90" x2="164" y2="120" stroke="#eab308" stroke-width="4"/>
          <line x1="178" y1="90" x2="178" y2="120" stroke="#eab308" stroke-width="4"/>
          <line x1="192" y1="90" x2="192" y2="120" stroke="#eab308" stroke-width="4"/>
          <line x1="206" y1="90" x2="206" y2="120" stroke="#eab308" stroke-width="4"/>
          <line x1="220" y1="90" x2="220" y2="120" stroke="#eab308" stroke-width="4"/>
          <line x1="234" y1="90" x2="234" y2="120" stroke="#eab308" stroke-width="4"/>
          <line x1="248" y1="90" x2="248" y2="120" stroke="#eab308" stroke-width="4"/>
          <text x="200" y="65" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">RJ-45 (8P8C)</text>
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
    explanation: "Tema 4.4.2: El conector RJ-45 es el estándar utilizado para el cableado de par trenzado (UTP Categoría 5e, 6 o 6a) en redes locales Ethernet. Posee 8 contactos (pines) alineados con los 8 hilos del cable."
  },
  {
    question: "62. Consulte la ilustración. ¿Cuál es el problema con la terminación que se muestra?",
    imageHtml: `
      <div style="background:#0b0f19; padding:20px; border-radius:8px; border:1px solid #1f2937;">
        <svg viewBox="0 0 400 140" style="width:100%; max-width:340px; display:block; margin:0 auto;">
          <rect x="220" y="30" width="120" height="80" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <path d="M 40 70 L 140 70" stroke="#22c55e" stroke-width="18"/>
          <text x="90" y="74" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">Funda UTP</text>
          <!-- Hilos expuestos sin destrenzar excesivos -->
          <line x1="140" y1="45" x2="220" y2="45" stroke="#ef4444" stroke-width="3"/>
          <line x1="140" y1="58" x2="220" y2="58" stroke="#38bdf8" stroke-width="3"/>
          <line x1="140" y1="71" x2="220" y2="71" stroke="#eab308" stroke-width="3"/>
          <line x1="140" y1="84" x2="220" y2="84" stroke="#a855f7" stroke-width="3"/>
          <line x1="140" y1="97" x2="220" y2="97" stroke="#34d399" stroke-width="3"/>
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
    explanation: "Tema 4.4.2: Al ponchar un conector RJ-45, la cubierta de plástico flexible debe quedar prensada dentro del conector para evitar que la porción sin trenzar sea demasiado larga, lo cual genera diafonía."
  },
  {
    question: "92. Consulte la ilustración. ¿Cuáles son los tres hechos que se pueden determinar a partir del resultado visible del comando show ip interface brief? (Elija tres opciones.)",
    imageHtml: `
      <div style="background:#000; color:#fff; font-family:monospace; padding:14px; border-radius:6px; text-align:left; font-size:12px; border:1px solid #1f2937;">
        Switch# show ip interface brief<br>
        Interface &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IP-Address &nbsp;&nbsp;&nbsp; OK? Method Status &nbsp;&nbsp;&nbsp; Protocol<br>
        FastEthernet0/1 &nbsp; unassigned &nbsp;&nbsp; YES manual up &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; up<br>
        FastEthernet0/2 &nbsp; unassigned &nbsp;&nbsp; YES manual down &nbsp;&nbsp;&nbsp;&nbsp; down<br>
        FastEthernet0/3 &nbsp; unassigned &nbsp;&nbsp; YES manual down &nbsp;&nbsp;&nbsp;&nbsp; down<br>
        ...<br>
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
    explanation: "Tema 17.5.7: Vlan1 es la SVI predeterminada. Al estar configurada con una IP activa (up/up), el switch se puede administrar de forma remota. FastEthernet0/1 está activa (up/up), lo que confirma un dispositivo conectado."
  },
  {
    question: "115. Consulte la ilustración. ¿Qué protocolo fue responsable de construir la tabla que se muestra?",
    imageHtml: `
      <div style="background:#000; color:#0f0; font-family:monospace; padding:14px; border-radius:6px; text-align:left; font-size:12px; border:1px solid #1f2937;">
        Interface: 192.168.1.67 --- 0xa<br>
        Internet Address &nbsp;&nbsp;&nbsp;&nbsp; Physical Address &nbsp;&nbsp;&nbsp;&nbsp; Type<br>
        192.168.1.254 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 64-0f-29-0d-36-91 &nbsp;&nbsp;&nbsp; dynamic<br>
        192.168.1.255 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ff-ff-ff-ff-ff-ff &nbsp;&nbsp;&nbsp; static<br>
        224.0.0.22 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01-00-5e-00-00-16 &nbsp;&nbsp;&nbsp; static
      </div>
    `,
    options: [
      "ICMP",
      "ARP",
      "DNS",
      "DHCP"
    ],
    answers: ["ARP"],
    explanation: "Tema 9.2.7: La tabla en la ilustración es una tabla ARP (Address Resolution Protocol), la cual asocia direcciones IPv4 de capa de red con direcciones físicas MAC de capa de enlace de datos."
  },
  {
    question: "136. Una cada elemento con el tipo de diagrama de topología en el que se lo suele identificar. No se utilizan todas las opciones.",
    imageHtml: `
      <table>
        <tr><th>Elemento de red</th><th>Tipo de diagrama de topología</th></tr>
        <tr><td>Ubicación de una PC de escritorio en un aula</td><td><strong>Diagrama de topología física</strong></td></tr>
        <tr><td>Tendido de cables que conectan salas a armarios</td><td><strong>Diagrama de topología física</strong></td></tr>
        <tr><td>Dirección IP de un servidor</td><td><strong>Diagrama de topología lógica</strong></td></tr>
        <tr><td>Esquema de direccionamiento de subredes</td><td><strong>Diagrama de topología lógica</strong></td></tr>
      </table>
    `,
    options: [
      "Ubicación de PC / Cables -> Topología Física",
      "Dirección IP de servidor / Esquemas -> Topología Lógica",
      "Puerto USB de una PC de escritorio (Opción no utilizada)"
    ],
    answers: [
      "Ubicación de PC / Cables -> Topología Física",
      "Dirección IP de servidor / Esquemas -> Topología Lógica"
    ],
    explanation: "Tema 1.3.2: La topología física indica la ubicación geográfica y tendido de cableado. La topología lógica documenta nombres de puertos, direcciones IP y esquema de subredes."
  },
  {
    question: "138. Observe la ilustración. ¿Cuál es la dirección IP que se debe utilizar como puerta de enlace predeterminada del host H1?",
    imageHtml: `
      <svg viewBox="0 0 500 200" style="width:100%; max-width:440px; display:block; margin:0 auto;">
        <circle cx="250" cy="50" r="22" fill="#0e7490" stroke="#38bdf8" stroke-width="2"/>
        <text x="250" y="54" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">R1</text>
        <line x1="250" y1="72" x2="180" y2="130" stroke="#94a3b8" stroke-width="2"/>
        <text x="200" y="90" fill="#22c55e" font-size="11" font-weight="bold">G0/0</text>
        <rect x="140" y="130" width="80" height="24" rx="3" fill="#1e293b" stroke="#38bdf8"/>
        <text x="180" y="146" fill="#fff" font-size="10" text-anchor="middle">Switch LAN</text>
        <line x1="180" y1="154" x2="180" y2="180" stroke="#94a3b8" stroke-width="2"/>
        <rect x="165" y="180" width="30" height="20" rx="2" fill="#0f172a" stroke="#22c55e"/>
        <text x="180" y="194" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">H1</text>
      </svg>
    `,
    options: [
      "R1: G0/0",
      "R1: S0/0/0",
      "R2: S0/0/1",
      "R2: S0/0/0"
    ],
    answers: ["R1: G0/0"],
    explanation: "La puerta de enlace predeterminada debe ser la interfaz del router local conectada directamente a la misma subred que el host H1 (en este caso la interfaz G0/0 de R1)."
  },
  {
    question: "149. Una las afirmaciones con el modelo de red relacionado. (No se utilizan todas las opciones).",
    imageHtml: `
      <table>
        <tr><th>Modelo de Red</th><th>Afirmaciones asociadas</th></tr>
        <tr><td><strong>Red punto a punto (Peer-to-Peer Network)</strong></td><td>• No se requiere un servidor dedicado.<br>• Las funciones de cliente y servidor se establecen por solicitud.</td></tr>
        <tr><td><strong>Aplicación punto a punto (Peer-to-Peer Application)</strong></td><td>• Requiere una interfaz de usuario específica.<br>• Se requiere un servicio en segundo plano.</td></tr>
      </table>
    `,
    options: [
      "Red P2P: No requiere servidor dedicado & Funciones por solicitud",
      "Aplicación P2P: Interfaz de usuario específica & Servicio en segundo plano",
      "Los dispositivos solo pueden desempeñar una función por vez (Opción no utilizada)"
    ],
    answers: [
      "Red P2P: No requiere servidor dedicado & Funciones por solicitud",
      "Aplicación P2P: Interfaz de usuario específica & Servicio en segundo plano"
    ],
    explanation: "Tema 15.2.2: Las redes P2P no requieren servidor dedicado; las aplicaciones P2P requieren interfaz de usuario y daemons ejecutándose en segundo plano."
  },
  {
    question: "154. Consulte la ilustración. Haga coincidir la red con la dirección IP y el prefijo correctos que satisfagan los requisitos de direccionamiento de host utilizables para cada red.",
    imageHtml: `
      <table>
        <tr><th>Red</th><th>Requisito</th><th>Subred asignada (VLSM)</th></tr>
        <tr><td>Network A</td><td>100 Hosts</td><td><strong>192.168.0.128 /25</strong></td></tr>
        <tr><td>Network B</td><td>50 Hosts</td><td><strong>192.168.0.0 /26</strong></td></tr>
        <tr><td>Network C</td><td>25 Hosts</td><td><strong>192.168.0.96 /27</strong></td></tr>
        <tr><td>Network D</td><td>2 Hosts</td><td><strong>192.168.0.80 /30</strong></td></tr>
      </table>
    `,
    options: [
      "Network A (100 Hosts) -> 192.168.0.128 /25",
      "Network B (50 Hosts) -> 192.168.0.0 /26",
      "Network C (25 Hosts) -> 192.168.0.96 /27",
      "Network D (2 Hosts) -> 192.168.0.80 /30"
    ],
    answers: [
      "Network A (100 Hosts) -> 192.168.0.128 /25",
      "Network B (50 Hosts) -> 192.168.0.0 /26",
      "Network C (25 Hosts) -> 192.168.0.96 /27",
      "Network D (2 Hosts) -> 192.168.0.80 /30"
    ],
    explanation: "Aplicando VLSM: 100 hosts requieren /25; 50 hosts requieren /26; 25 hosts requieren /27; 2 hosts en punto a punto requieren /30."
  },
  {
    question: "158. Consulte la ilustración. Los switches tienen una configuración predeterminada. El host A necesita comunicarse con el host D, pero el host A no tiene la dirección MAC del gateway predeterminado. ¿Qué dispositivos de red recibirán la solicitud ARP enviada por el host A?",
    imageHtml: `
      <svg viewBox="0 0 500 180" style="width:100%; max-width:440px; display:block; margin:0 auto;">
        <circle cx="180" cy="40" r="20" fill="#0e7490" stroke="#38bdf8" stroke-width="2"/>
        <text x="180" y="44" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">R1</text>
        <line x1="180" y1="60" x2="180" y2="100" stroke="#94a3b8" stroke-width="2"/>
        <rect x="130" y="100" width="100" height="24" rx="3" fill="#1e293b" stroke="#38bdf8"/>
        <text x="180" y="116" fill="#fff" font-size="10" text-anchor="middle">Switch</text>
        <line x1="150" y1="124" x2="120" y2="150" stroke="#94a3b8" stroke-width="2"/>
        <line x1="180" y1="124" x2="180" y2="150" stroke="#94a3b8" stroke-width="2"/>
        <line x1="210" y1="124" x2="240" y2="150" stroke="#94a3b8" stroke-width="2"/>
        <rect x="110" y="150" width="20" height="18" rx="2" fill="#0f172a" stroke="#22c55e"/>
        <text x="120" y="163" fill="#fff" font-size="9" text-anchor="middle">A</text>
        <rect x="170" y="150" width="20" height="18" rx="2" fill="#0f172a" stroke="#38bdf8"/>
        <text x="180" y="163" fill="#fff" font-size="9" text-anchor="middle">B</text>
        <rect x="230" y="150" width="20" height="18" rx="2" fill="#0f172a" stroke="#38bdf8"/>
        <text x="240" y="163" fill="#fff" font-size="9" text-anchor="middle">C</text>
      </svg>
    `,
    options: [
      "solo host D",
      "solo hosts A, B, C y D",
      "solo hosts B y C",
      "solo hosts B, C y enrutador R1",
      "solo hosts A, B y C",
      "solo enrutador R1"
    ],
    answers: ["solo hosts B, C y enrutador R1"],
    explanation: "La solicitud ARP es un Broadcast de Capa 2. El switch la conmuta a todos los puertos dentro de su misma subred (hosts B, C e interfaz LAN de R1). R1 detiene el broadcast sin reenviarlo a R2 o D."
  }
];
