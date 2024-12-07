export default {
  name: "Aoi.js Enhanced Theme",
  init: function () {
    console.log("Aoi.js Enhanced Theme ativado!");

    const aoiJsHighlightingRules = [
      // Variáveis Aoi.js ($get)
      {
        regex: /\$get\w*\((.*?)\)/g,
        css: "color: #FFAA00; font-weight: bold;",
      },
      // Variáveis temporárias ($let)
      {
        regex: /\$let\w*\((.*?)\)/g,
        css: "color: #00FF00; font-style: italic;",
      },
      // Comandos Aoi.js ($comando)
      {
        regex: /\$[a-zA-Z]+\((.*?)\)/g,
        css: "color: #007BFF; font-weight: bold;",
      },
      // Funções Aoi.js como $set, $send, etc.
      {
        regex: /\$(set|send|edit|delete|create|update)\w*\((.*?)\)/g,
        css: "color: #FF6347; font-style: italic;",
      },
      // Comentários
      {
        regex: /\/\*[\s\S]*?\*\/|\/\/.*/g,
        css: "color: #888888; font-style: italic;",
      },
      // Strings
      {
        regex: /("|').*?("|')/g,
        css: "color: #FF00FF;",
      },
      // Palavras-chave JS
      {
        regex: /\bfunction\b|\bconst\b|\blet\b|\breturn\b/g,
        css: "color: #00FFFF; font-weight: bold;",
      },
      // Números
      {
        regex: /\b\d+\b/g,
        css: "color: #FF4500;",
      },
      // Novos realces para logs de erro, aviso, e info
      {
        regex: /\/\*\s*ERROR\s*\*\//g,
        css: "color: #FF0000; font-weight: bold; background-color: #FFDDDD;",
      },
      {
        regex: /\/\*\s*WARNING\s*\*\//g,
        css: "color: #FFA500; font-weight: bold; background-color: #FFF3E0;",
      },
      {
        regex: /\/\*\s*INFO\s*\*\//g,
        css: "color: #008000; font-weight: bold; background-color: #E8F5E9;",
      },
    ];

    // Adiciona as regras de destaque ao editor
    editorManager.addCustomHighlighter("aoi-js-highlighter", aoiJsHighlightingRules);

    // Adiciona uma notificação para o usuário com temporizador
    editorManager.addNotification({
      title: "Aoi.js Theme",
      text: "Tema e realce de código para Aoi.js ativados.",
      type: "success",
      timeout: 5000, // Notificação desaparece após 5 segundos
    });

    // Mensagem de boas-vindas no console
    console.log("%cBem-vindo ao Aoi.js Enhanced Theme!", "color: #007BFF; font-weight: bold;");
  },

  destroy: function () {
    console.log("Aoi.js Enhanced Theme desativado.");
    // Remove o realce personalizado
    editorManager.removeCustomHighlighter("aoi-js-highlighter");
  },
};
