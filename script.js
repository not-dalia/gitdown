;(
  function() {
    var gfm = turndownPluginGfm.tables;
    var turndownService = new TurndownService({headingStyle: "atx", codeBlockStyle: "fenced"});
    turndownService.use(gfm);

    document.getElementById("input").addEventListener("input", function(event) {
      console.log("Textarea two was changed.");
      var markdown = turndownService.turndown(document.getElementById("input").value);
      document.getElementById("output").value = markdown;
    });
  }
)();