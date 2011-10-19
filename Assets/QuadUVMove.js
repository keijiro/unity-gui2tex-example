#pragma strict

function Update() {
	var mesh : Mesh = GetComponent(MeshFilter).mesh;
	var uv : Vector2[] = mesh.uv;

    var ox = Mathf.Sin(Time.time * 2.0);
    var oy = Mathf.Sin(Time.time * 1.3);
	
	uv[0] = Vector2(ox      , oy);
	uv[1] = Vector2(ox + 0.5, oy);
	uv[2] = Vector2(ox + 0.5, oy - 0.5);
	uv[3] = Vector2(ox      , oy - 0.5);
	
	mesh.uv = uv;
}
