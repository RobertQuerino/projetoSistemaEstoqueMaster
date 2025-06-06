const estoque = {

  rua02: [

     {sd:1586, rua:2, bloco:1, nivel:"a"},
     {sd:1586, rua:2, bloco:2, nivel:"a"},
     {sd:1579, rua:2, bloco:3, nivel:"a"},
     {sd:1579, rua:2, bloco:4, nivel:"a"},
     {sd:1587, rua:2, bloco:5, nivel:"a"},
     {sd:1587, rua:2, bloco:6, nivel:"a"},
     {sd:1561, rua:2, bloco:7, nivel:"a"},
     {sd:1561, rua:2, bloco:8, nivel:"a"},
     {sd:1584, rua:2, bloco:9, nivel:"a"},
     {sd:1584, rua:2, bloco:10, nivel:"a"},
     {sd:1558, rua:2, bloco:11, nivel:"a"},
     {sd:1558, rua:2, bloco:12, nivel:"a"},
     {sd:1585, rua:2, bloco:13, nivel:"a"},
     {sd:1585, rua:2, bloco:14, nivel:"a"},
     {sd:1559, rua:2, bloco:15, nivel:"a"},
     {sd:1559, rua:2, bloco:16, nivel:"a"},
     {sd:1575, rua:2, bloco:17, nivel:"a"},
     {sd:1575, rua:2, bloco:18, nivel:"a"},
     {sd:1560, rua:2, bloco:19, nivel:"a"},
     {sd:1560, rua:2, bloco:20, nivel:"a"},
     {sd:1583, rua:2, bloco:21, nivel:"a"},
     {sd:1580, rua:2, bloco:22, nivel:"a"},
     {sd:1590, rua:2, bloco:23, nivel:"a"},
     {sd:1308, rua:2, bloco:24, nivel:"a"},
     {sd:1553, rua:2, bloco:27, nivel:"a"},
     {sd:1553, rua:2, bloco:28, nivel:"a"},
     {sd:1552, rua:2, bloco:29, nivel:"a"},
     {sd:1551, rua:2, bloco:30, nivel:"a"},
     {sd:1550, rua:2, bloco:31, nivel:"a"},
     {sd:1549, rua:2, bloco:32, nivel:"a"},
     {sd:1591, rua:2, bloco:33, nivel:"a"},
     {sd:1571, rua:2, bloco:34, nivel:"a"},
     {sd:1554, rua:2, bloco:35, nivel:"a"},
     {sd:1567, rua:2, bloco:36, nivel:"a"},
     {sd:253, rua:2, bloco:37, nivel:"a"},
     {sd:1566, rua:2, bloco:38, nivel:"a"},
     {sd:1565, rua:2, bloco:39, nivel:"a"},
     {sd:1574, rua:2, bloco:40, nivel:"a"},
     {sd:1264, rua:2, bloco:41, nivel:"a"},
     {sd:1265, rua:2, bloco:42, nivel:"a"},
     {sd:1562, rua:2, bloco:43, nivel:"a"},
     {sd:1563, rua:2, bloco:44, nivel:"a"},
     {sd:1441, rua:2, bloco:45, nivel:"a"},
     {sd:1442, rua:2, bloco:46, nivel:"a"},
     {sd:1100, rua:2, bloco:47, nivel:"a1"},
     {sd:269, rua:2, bloco:47, nivel:"a2"},
     {sd:979, rua:2, bloco:48, nivel:"a1"},
     {sd:1304, rua:2, bloco:48, nivel:"a2"},
     {sd:1301, rua:2, bloco:49, nivel:"a1"},
     {sd:1486, rua:2, bloco:49, nivel:"a2"},
     {sd:304, rua:2, bloco:50, nivel:"a1"},
     {sd:1303, rua:2, bloco:50, nivel:"a2"},
     {sd:461, rua:2, bloco:51, nivel:"a1"},
     {sd:2157, rua:2, bloco:51, nivel:"a2"},
     {sd:475, rua:2, bloco:52, nivel:"a1"},
     {sd:993, rua:2, bloco:52, nivel:"a2"},
     {sd:1573, rua:2, bloco:53, nivel:"a"},
     {sd:1572, rua:2, bloco:54, nivel:"a"},
     {sd:1305, rua:2, bloco:55, nivel:"a"},
     {sd:995, rua:2, bloco:56, nivel:"a"},
     {sd:994, rua:2, bloco:57, nivel:"a"},
     {sd:996, rua:2, bloco:58, nivel:"a"}
  
  ]

}

function consultarSd() {
  
  const inputConsulta = document.getElementById('consul').value

  const resultado = estoque.rua02.find(item => item.sd == inputConsulta)

  if (resultado) {

      document.getElementById("mensagemTexto").innerHTML = `SD: ${resultado.sd}, <br>Rua: ${resultado.rua}, <br>Bloco: ${resultado.bloco}, Nível: ${resultado.nivel}`;
      document.getElementById("overlay").style.display = "block";
      document.getElementById("mensagemModal").style.display = "flex";

  } else {

      document.getElementById("mensagemTexto").innerHTML = "Item não encontrado.";
      document.getElementById("overlay").style.display = "block";
      document.getElementById("mensagemModal").style.display = "flex";
      
  }


}

function fecharMensagem() {

      document.getElementById("overlay").style.display = "none";
      document.getElementById("mensagemModal").style.display = "none";

}

