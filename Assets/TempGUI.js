function Update() {
    guiText.text = Time.time % 2 > 1 ? "GUI TEXT" : "RenderTexture";
}
