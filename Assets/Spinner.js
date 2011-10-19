function Update() {
    transform.localRotation =
      Quaternion.AngleAxis(Time.time * 63, Vector3.right) *
      Quaternion.AngleAxis(Time.time * 11, Vector3.up);
}
