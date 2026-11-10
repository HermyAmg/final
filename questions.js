const rawQuestions = [
  {
    question: "61. ¿Qué conector se utiliza con el cableado de par trenzado en una LAN Ethernet?",
    imageHtml: `<img src="https://examenredes.com/wp-content/uploads/2020/01/CCNA-1-Examen-Final-Preguntas-y-Respuestas-61.jpg" alt="Conector RJ-45" referrerpolicy="no-referrer" style="max-width:100%; border-radius:6px;">`,
    options: [
      "Conector RJ-11",
      "Conector BNC Coaxial",
      "Conector RJ-45",
      "Conector LC de fibra óptica"
    ],
    answers: ["Conector RJ-45"],
    explanation: "Tema 4.4.2: El conector RJ-45 es el estándar utilizado para el cableado de par trenzado (UTP de Categoría 5e, 6 o 6a) en redes locales Ethernet. Este conector cuenta con 8 contactos (pines) alineados con los 8 hilos del cable."
  },
  {
    question: "62. Consulte la ilustración. ¿Cuál es el problema con la terminación que se muestra?",
    imageHtml: `<img src="https://examenredes.com/wp-content/uploads/2020/01/CCNA-1-Examen-Final-Preguntas-y-Respuestas-3.png" alt="Terminación de cable RJ-45" referrerpolicy="no-referrer" style="max-width:100%; border-radius:6px;">`,
    options: [
      "Los cables son demasiado gruesos para el conector que se utiliza.",
      "La longitud de la parte sin trenzar de cada cable es demasiado larga.",
      "No se debería haber quitado la malla de cobre tejida.",
      "Se está utilizando el tipo de conector incorrecto."
    ],
    answers: ["La longitud de la parte sin trenzar de cada cable es demasiado larga."],
    explanation: "Tema 4.4.2: Al terminar un cable a un conector RJ-45, la funda de plástico flexible exterior debe quedar doblada y presionada dentro del conector, sin dejar al descubierto los hilos de colores desnudos."
  },
  {
    question: "92. Consulte la ilustración. ¿Cuáles son los tres hechos que se pueden determinar a partir del resultado visible del comando show ip interface brief? (Elija tres opciones.)",
    imageHtml: `<img src="https://examenredes.com/wp-content/uploads/2020/01/CCNA-1-Examen-Final-Preguntas-y-Respuestas-92.png" alt="Show ip interface brief" referrerpolicy="no-referrer" style="max-width:100%; border-radius:6px;">`,
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
    explanation: "Tema 17.5.7: Vlan1 es la SVI predeterminada. Debido a que se ha configurado una SVI activa con IP, el switch se puede administrar de forma remota. FastEthernet0/1 aparece activa (up/up), por lo que hay un dispositivo conectado."
  },
  {
    question: "115. Consulte la ilustración. ¿Qué protocolo fue responsable de construir la tabla que se muestra?",
    imageHtml: `<img src="https://examenredes.com/wp-content/uploads/2020/01/CCNA-1-Examen-Final-Preguntas-y-Respuestas-115.png" alt="Tabla ARP" referrerpolicy="no-referrer" style="max-width:100%; border-radius:6px;">`,
    options: [
      "ICMP",
      "ARP",
      "DNS",
      "DHCP"
    ],
    answers: ["ARP"],
    explanation: "Tema 9.2.7: La tabla que se muestra en la ilustración es una tabla ARP (Address Resolution Protocol), la cual asocia direcciones IPv4 con sus respectivas direcciones físicas MAC."
  },
  {
    question: "136. Una cada elemento con el tipo de diagrama de topología en el que se lo suele identificar. No se utilizan todas las opciones.",
    imageHtml: `<img src="https://examenredes.com/wp-content/uploads/2020/01/ITN-Version-7.00-Examen-final-ITNv7-P136.png" alt="Diagrama de topología" referrerpolicy="no-referrer" style="max-width:100%; border-radius:6px;">`,
    options: [
      "Ubicación de una PC de escritorio en un aula -> Diagrama de topología física",
      "Tendido de cables que conectan salas a armarios de cableado -> Diagrama de topología física",
      "Dirección IP de un servidor -> Diagrama de topología lógica"
    ],
    answers: [
      "Ubicación de una PC de escritorio en un aula -> Diagrama de topología física",
      "Tendido de cables que conectan salas a armarios de cableado -> Diagrama de topología física",
      "Dirección IP de un servidor -> Diagrama de topología lógica"
    ],
    explanation: "Tema 1.3.2: La topología física documenta la ubicación real de terminales y cableado. La topología lógica detalla direcciones IP, nombres de puertos y esquemas de red."
  },
  {
    question: "138. Observe la ilustración. ¿Cuál es la dirección IP que se debe utilizar como puerta de enlace predeterminada del host H1?",
    imageHtml: `<img src="https://examenredes.com/wp-content/uploads/2020/01/CCNA-1-Examen-Final-Preguntas-y-Respuestas-138.png" alt="Puerta de enlace H1" referrerpolicy="no-referrer" style="max-width:100%; border-radius:6px;">`,
    options: [
      "R1: G0/0",
      "R1: S0/0/0",
      "R2: S0/0/1",
      "R2: S0/0/0"
    ],
    answers: ["R1: G0/0"],
    explanation: "La puerta de enlace predeterminada debe ser la interfaz del router que pertenece a la misma subred local del host H1 (en este caso la interfaz G0/0 de R1)."
  },
  {
    question: "149. Una las afirmaciones con el modelo de red relacionado. (No se utilizan todas las opciones).",
    imageHtml: `<img src="https://examenredes.com/wp-content/uploads/2020/01/ITN-Version-7.00-Examen-final-de-iNV7-149.png" alt="Modelos de red P2P" referrerpolicy="no-referrer" style="max-width:100%; border-radius:6px;">`,
    options: [
      "Red punto a punto: No se requiere un servidor dedicado.",
      "Red punto a punto: Las funciones de cliente y servidor se establecen por solicitud.",
      "Aplicación punto a punto: Requiere una interfaz de usuario específica.",
      "Aplicación punto a punto: Se requiere un servicio en segundo plano."
    ],
    answers: [
      "Red punto a punto: No se requiere un servidor dedicado.",
      "Red punto a punto: Las funciones de cliente y servidor se establecen por solicitud.",
      "Aplicación punto a punto: Requiere una interfaz de usuario específica.",
      "Aplicación punto a punto: Se requiere un servicio en segundo plano."
    ],
    explanation: "Tema 15.2.2: Las redes peer-to-peer no requieren servidores dedicados. Las aplicaciones peer-to-peer requieren software con interfaz de usuario y servicios en segundo plano."
  },
  {
    question: "154. Consulte la ilustración. Haga coincidir la red con la dirección IP y el prefijo correctos que satisfagan los requisitos de direccionamiento de host utilizables para cada red.",
    imageHtml: `<img src="https://examenredes.com/wp-content/uploads/2020/01/CCNA-1-Examen-Final-Preguntas-y-Respuestas-154.png" alt="Direccionamiento VLSM" referrerpolicy="no-referrer" style="max-width:100%; border-radius:6px;">`,
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
    explanation: "Se calcula VLSM: Network A (100 hosts) usa /25; Network B (50 hosts) usa /26; Network C (25 hosts) usa /27; Network D (2 hosts enlace WAN) usa /30."
  },
  {
    question: "158. Consulte la ilustración. Los switches tienen una configuración predeterminada. El host A necesita comunicarse con el host D, pero el host A no tiene la dirección MAC del gateway predeterminado. ¿Qué dispositivos de red recibirán la solicitud ARP enviada por el host A?",
    imageHtml: `<img src="https://examenredes.com/wp-content/uploads/2020/01/CCNA-1-Examen-Final-Preguntas-y-Respuestas-158.png" alt="Solicitud ARP" referrerpolicy="no-referrer" style="max-width:100%; border-radius:6px;">`,
    options: [
      "solo host D",
      "solo hosts A, B, C y D",
      "solo hosts B y C",
      "solo hosts B, C y enrutador R1",
      "solo hosts A, B y C",
      "solo enrutador R1"
    ],
    answers: ["solo hosts B, C y enrutador R1"],
    explanation: "Una solicitud ARP es una difusión de Capa 2 (Broadcast). El switch conmuta la trama a todos los hosts en el mismo dominio de difusión (B, C y R1). El router no reenvía la difusión a la otra red."
  }
];
