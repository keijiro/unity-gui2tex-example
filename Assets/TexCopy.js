#pragma strict

var fromRenderTexture : RenderTexture;
var toTexture : Texture2D;

function Update() {
    RenderTexture.active = fromRenderTexture;

    toTexture.ReadPixels(Rect(0, 0, fromRenderTexture.width, fromRenderTexture.height), 0, 0, false);
    toTexture.Apply();

    RenderTexture.active = null;
}
