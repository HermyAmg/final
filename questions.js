const rawQuestions = [
  {
    question: "158. Consulte la ilustración. Los switches tienen una configuración predeterminada. El host A necesita comunicarse con el host D, pero el host A no tiene la dirección MAC del gateway predeterminado. ¿Qué dispositivos de red recibirán la solicitud ARP enviada por el host A?",
    imageHtml: `
      <svg viewBox="0 0 500 240" style="width: 100%; max-width: 460px;">
        <!-- Router R1 -->
        <circle cx="200" cy="40" r="28" fill="#0e7490" stroke="#38bdf8" stroke-width="2"/>
        <text x="200" y="44" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">R1</text>
        
        <!-- Enlace WAN Serial R1-R2 -->
        <path d="M 228 40 L 332 40" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 3"/>
        
        <!-- Router R2 -->
        <circle cx="360" cy="40" r="28" fill="#0e7490" stroke="#38bdf8" stroke-width="2"/>
        <text x="360" y="44" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">R2</text>
        
        <!-- Enlaces a Switches -->
        <line x1="200" y1="68" x2="200" y2="120" stroke="#94a3b8" stroke-width="2"/>
        <line x1="360" y1="68" x2="360" y2="120" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- Switch 1 -->
        <rect x="150" y="120" width="100" height="30" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="200" y="140" fill="#fff" font-size="12" text-anchor="middle">Switch</text>
        
        <!-- Switch 2 -->
        <rect x="310" y="120" width="100" height="30" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="360" y="140" fill="#fff" font-size="12" text-anchor="middle">Switch</text>
        
        <!-- Enlaces a Hosts LAN R1 -->
        <line x1="170" y1="150" x2="130" y2="190" stroke="#94a3b8" stroke-width="2"/>
        <line x1="200" y1="150" x2="200" y2="190" stroke="#94a3b8" stroke-width="2"/>
        <line x1="230" y1="150" x2="270" y2="190" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- Enlace Host D -->
        <line x1="360" y1="150" x2="360" y2="190" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- Host A -->
        <rect x="110" y="190" width="40" height="35" rx="3" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
        <text x="130" y="212" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">A</text>
        
        <!-- Host B -->
        <rect x="180" y="190" width="40" height="35" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="200" y="212" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">B</text>
        
        <!-- Host C -->
        <rect x="250" y="190" width="40" height="35" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="270" y="212" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">C</text>
        
        <!-- Host D -->
        <rect x="340" y="190" width="40" height="35" rx="3" fill="#0f172a" stroke="#eab308" stroke-width="2"/>
        <text x="360" y="212" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">D</text>
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
    explanation: "Una solicitud de ARP es una trama de difusión de capa 2 (Broadcast). El switch inunda la trama por todos sus puertos activos dentro del mismo dominio de colisión/difusión. Por lo tanto, los hosts B, C y la interfaz LAN del router R1 reciben la solicitud ARP. El router R1 NO reenvía solicitudes de difusión a través del enlace WAN a R2."
  },
  {
    question: "154. Consulte la ilustración. Haga coincidir la red con la dirección IP y el prefijo correctos que satisfagan los requisitos de direccionamiento de host utilizables para cada red.",
    imageHtml: `
      <svg viewBox="0 0 500 230" style="width: 100%; max-width: 480px;">
        <!-- Router 1 -->
        <circle cx="260" cy="50" r="22" fill="#0e7490" stroke="#38bdf8" stroke-width="2"/>
        <!-- Router 2 -->
        <circle cx="370" cy="50" r="22" fill="#0e7490" stroke="#38bdf8" stroke-width="2"/>
        
        <!-- Red D: Enlace WAN R1-R2 (2 Hosts) -->
        <line x1="282" y1="50" x2="348" y2="50" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 2"/>
        <text x="315" y="38" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Network D (2 Hosts)</text>
        
        <!-- Red C: LAN Switch 1 (25 Hosts) -->
        <line x1="238" y1="50" x2="180" y2="50" stroke="#94a3b8" stroke-width="2"/>
        <rect x="140" y="38" width="40" height="24" rx="3" fill="#1e293b" stroke="#38bdf8"/>
        <text x="110" y="30" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Network C (25 Hosts)</text>
        
        <!-- Red B: LAN Switch 2 (50 Hosts) -->
        <line x1="260" y1="72" x2="260" y2="110" stroke="#94a3b8" stroke-width="2"/>
        <rect x="240" y="110" width="40" height="24" rx="3" fill="#1e293b" stroke="#38bdf8"/>
        <text x="200" y="130" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Network B (50 Hosts)</text>
        
        <!-- Red A: LAN Switch 3 (100 Hosts) -->
        <line x1="370" y1="72" x2="370" y2="110" stroke="#94a3b8" stroke-width="2"/>
        <rect x="350" y="110" width="40" height="24" rx="3" fill="#1e293b" stroke="#38bdf8"/>
        <text x="420" y="130" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Network A (100 Hosts)</text>
      </svg>
      <table>
        <tr><th>Red</th><th>Requisito</th><th>Subred asignada (VLSM)</th></tr>
        <tr><td>Network A</td><td>100 Hosts</td><td><strong>192.168.0.128 /25</strong> (126 hosts útiles)</td></tr>
        <tr><td>Network B</td><td>50 Hosts</td><td><strong>192.168.0.0 /26</strong> (62 hosts útiles)</td></tr>
        <tr><td>Network C</td><td>25 Hosts</td><td><strong>192.168.0.96 /27</strong> (30 hosts útiles)</td></tr>
        <tr><td>Network D</td><td>2 Hosts</td><td><strong>192.168.0.80 /30</strong> (2 hosts útiles)</td></tr>
      </table>
    `,
    options: [
      "Network A -> 192.168.0.128 /25",
      "Network B -> 192.168.0.0 /26",
      "Network C -> 192.168.0.96 /27",
      "Network D -> 192.168.0.80 /30"
    ],
    answers: [
      "Network A -> 192.168.0.128 /25",
      "Network B -> 192.168.0.0 /26",
      "Network C -> 192.168.0.96 /27",
      "Network D -> 192.168.0.80 /30"
    ],
    explanation: "Aplicando VLSM de mayor a menor requisito: 100 hosts requieren un bloque /25 (128 direcciones). 50 hosts requieren un bloque /26 (64 direcciones). 25 hosts requieren un bloque /27 (32 direcciones). 2 hosts de enlace WAN requieren un bloque /30 (4 direcciones)."
  },
  {
    question: "149. Una las afirmaciones con el modelo de red relacionado. (No se utilizan todas las opciones).",
    imageHtml: `
      <table>
        <tr><th>Modelo de Red</th><th>Afirmaciones correspondientes</th></tr>
        <tr><td><strong>Red punto a punto (Peer-to-Peer Network)</strong></td><td>• No se requiere un servidor dedicado.<br>• Las funciones de cliente y servidor se establecen por solicitud.</td></tr>
        <tr><td><strong>Aplicación punto a punto (Peer-to-Peer Application)</strong></td><td>• Requiere una interfaz de usuario específica.<br>• Se requiere un servicio en segundo plano.</td></tr>
      </table>
    `,
    options: [
      "Red P2P: No requiere servidor dedicado & Funciones por solicitud",
      "Aplicación P2P: Requiere interfaz de usuario específica & Servicio en segundo plano",
      "Los dispositivos solo pueden desempeñar una función por vez (Opción no utilizada)"
    ],
    answers: [
      "Red P2P: No requiere servidor dedicado & Funciones por solicitud",
      "Aplicación P2P: Requiere interfaz de usuario específica & Servicio en segundo plano"
    ],
    explanation: "Las redes peer-to-peer no requieren servidores centralizados dedicados; cada nodo actúa como cliente/servidor a demanda. Las aplicaciones P2P específicas requieren software con interfaz de usuario y daemon/servicio en segundo plano para gestionar las conexiones."
  },
  {
    question: "138. Observe la ilustración. ¿Cuál es la dirección IP que se debe utilizar como puerta de enlace predeterminada del host H1?",
    imageHtml: `
      <svg viewBox="0 0 500 220" style="width: 100%; max-width: 460px;">
        <!-- Nube ISP -->
        <path d="M 400 30 Q 420 10 440 30 Q 460 30 460 45 Q 460 60 440 60 Q 420 70 400 50 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="430" y="42" fill="#fff" font-size="11" text-anchor="middle">ISP</text>
        
        <!-- Router R2 (Borde) -->
        <circle cx="330" cy="50" r="22" fill="#0e7490" stroke="#38bdf8" stroke-width="2"/>
        <text x="330" y="54" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">R2</text>
        <line x1="352" y1="45" x2="400" y2="42" stroke="#ef4444" stroke-width="2"/>
        
        <!-- Router R1 (Acceso H1) -->
        <circle cx="210" cy="110" r="22" fill="#0e7490" stroke="#38bdf8" stroke-width="2"/>
        <text x="210" y="114" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">R1</text>
        <line x1="228" y1="96" x2="310" y2="60" stroke="#ef4444" stroke-width="2"/>
        
        <!-- Router R3 -->
        <circle cx="410" cy="110" r="22" fill="#0e7490" stroke="#38bdf8" stroke-width="2"/>
        <text x="410" y="114" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">R3</text>
        <line x1="348" y1="64" x2="392" y2="96" stroke="#ef4444" stroke-width="2"/>
        
        <!-- Switch LAN H1 -->
        <rect x="130" y="160" width="60" height="20" rx="3" fill="#1e293b" stroke="#38bdf8"/>
        <line x1="192" y1="124" x2="160" y2="160" stroke="#94a3b8" stroke-width="2"/>
        <text x="175" y="132" fill="#22c55e" font-size="10" font-weight="bold">G0/0</text>
        
        <!-- Host H1 -->
        <rect x="90" y="190" width="30" height="25" rx="2" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
        <text x="105" y="207" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">H1</text>
        <line x1="105" y1="190" x2="140" y2="180" stroke="#94a3b8" stroke-width="2"/>
      </svg>
    `,
    options: [
      "R1: G0/0",
      "R1: S0/0/0",
      "R2: S0/0/1",
      "R2: S0/0/0"
    ],
    answers: ["R1: G0/0"],
    explanation: "La puerta de enlace predeterminada (default gateway) de un host local debe ser la dirección IP perteneciente a la interfaz del router local conectada directamente a la subred de dicho host (en este caso, la interfaz GigabitEthernet G0/0 del Router R1)."
  },
  {
    question: "136. Una cada elemento con el tipo de diagrama de topología en el que se lo suele identificar. No se utilizan todas las opciones.",
    imageHtml: `
      <table>
        <tr><th>Elemento de red</th><th>Tipo de diagrama de topología</th></tr>
        <tr><td>Ubicación de una PC de escritorio en un aula</td><td><strong>Diagrama de topología física</strong></td></tr>
        <tr><td>Tendido de cables que conectan salas a armarios</td><td><strong>Diagrama de topología física</strong></td></tr>
        <tr><td>Dirección IP de un servidor</td><td><strong>Diagrama de topología lógica</strong></td></tr>
        <tr><td>Esquema de direccionamiento y máscaras</td><td><strong>Diagrama de topología lógica</strong></td></tr>
      </table>
    `,
    options: [
      "Ubicación de PC / Cables -> Topología Física",
      "Dirección IP de servidor / Esquemas -> Topología Lógica",
      "Puerto USB de una PC (Opción no utilizada)"
    ],
    answers: [
      "Ubicación de PC / Cables -> Topología Física",
      "Dirección IP de servidor / Esquemas -> Topología Lógica"
    ],
    explanation: "La topología física documenta la ubicación de los dispositivos finales, armarios de cableado (racks) y tendidos de cable físicos. La topología lógica documenta nombres de puertos, direcciones IP, esquemas de subredes y VLANs."
  },
  {
    question: "115. Consulte la ilustración. ¿Qué protocolo fue responsable de construir la tabla que se muestra?",
    imageHtml: `
      <div style="background:#000; color:#0f0; font-family:monospace; padding:12px; border-radius:6px; text-align:left; font-size:12px;">
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
    explanation: "La salida muestra la tabla de caché ARP (Address Resolution Protocol) obtenida con el comando `arp -a`. Relaciona direcciones IPv4 de Capa 3 con sus correspondientes direcciones físicas MAC de Capa 2."
  },
  {
    question: "92. Consulte la ilustración. ¿Cuáles son los tres hechos que se pueden determinar a partir del resultado visible del comando show ip interface brief? (Elija tres opciones.)",
    imageHtml: `
      <div style="background:#000; color:#fff; font-family:monospace; padding:12px; border-radius:6px; text-align:left; font-size:11px;">
        Switch# show ip interface brief<br>
        Interface &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IP-Address &nbsp;&nbsp;&nbsp; OK? Method Status &nbsp;&nbsp;&nbsp; Protocol<br>
        FastEthernet0/1 &nbsp; unassigned &nbsp;&nbsp; YES manual up &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; up<br>
        FastEthernet0/2 &nbsp; unassigned &nbsp;&nbsp; YES manual down &nbsp;&nbsp;&nbsp;&nbsp; down<br>
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
    explanation: "Vlan1 tiene asignada una IP (192.168.11.3) y estado UP/UP, lo que indica que la SVI está configurada y permite acceso remoto. FastEthernet0/1 está en estado UP/UP, lo que confirma que hay un host conectado a esa interfaz física."
  },
  {
    question: "62. Consulte la ilustración. ¿Cuál es el problema con la terminación que se muestra?",
    imageHtml: `
      <div style="background:#1e293b; padding:15px; border-radius:8px; text-align:center;">
        <svg viewBox="0 0 200 100" style="width:180px;">
          <rect x="100" y="20" width="70" height="60" fill="none" stroke="#64748b" stroke-width="3" rx="4"/>
          <path d="M 10 50 L 70 50" stroke="#22c55e" stroke-width="12"/>
          <!-- Hilos expuestos sin trenzar -->
          <line x1="70" y1="30" x2="130" y2="30" stroke="#ef4444" stroke-width="2"/>
          <line x1="70" y1="40" x2="130" y2="40" stroke="#38bdf8" stroke-width="2"/>
          <line x1="70" y1="50" x2="130" y2="50" stroke="#eab308" stroke-width="2"/>
          <line x1="70" y1="60" x2="130" y2="60" stroke="#a855f7" stroke-width="2"/>
        </svg>
      </div>
    `,
    options: [
      "Los cables son demasiado gruesos para el conector que se utiliza.",
      "La longitud de la parte sin trenzar de cada cable es demasiado larga.",
      "No se debería haber quitado la malla de cobre tejida.",
      "Se está utilizando el tipo de conector incorrecto."
    ],
    answers: ["La longitud de la parte sin trenzar de cada cable es demasiado larga."],
    explanation: "Al ponchar un conector RJ-45, la cubierta plástica protectora exterior debe quedar sujeta dentro del conector. Exponer hilos individuales sin destrenzar excesivamente genera diafonía (crosstalk) y fallas mecánicas."
  },
  {
    question: "61. ¿Qué conector se utiliza con el cableado de par trenzado en una LAN Ethernet?",
    imageHtml: `
      <div style="display:flex; justify-content:space-around; align-items:center; background:#0f172a; padding:15px; border-radius:8px;">
        <div style="border:2px solid #22c55e; padding:8px; border-radius:6px; text-align:center;">
          <span style="color:#22c55e; font-weight:bold; display:block; margin-bottom:4px;">RJ-45 (Correcto)</span>
          <svg viewBox="0 0 60 50" style="width:50px;"><rect x="10" y="10" width="40" height="30" fill="none" stroke="#38bdf8" stroke-width="2"/><line x1="15" y1="10" x2="15" y2="25" stroke="#eab308" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="25" stroke="#eab308" stroke-width="2"/><line x1="35" y1="10" x2="35" y2="25" stroke="#eab308" stroke-width="2"/><line x1="45" y1="10" x2="45" y2="25" stroke="#eab308" stroke-width="2"/></svg>
        </div>
      </div>
    `,
    options: [
      "Conector RJ-45",
      "Conector RJ-11",
      "Conector LC de fibra óptica",
      "Conector BNC Coaxial"
    ],
    answers: ["Conector RJ-45"],
    explanation: "El conector RJ-45 (8P8C) es el estándar utilizado para rematar cables de par trenzado (UTP/STP) en redes LAN Ethernet de cobre."
  }
];