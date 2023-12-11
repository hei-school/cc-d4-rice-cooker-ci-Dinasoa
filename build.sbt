lazy val root = (project in file("."))
  .settings(
    (scalastyleConfig in Compile) := (baseDirectory.value / "project" / "scalastyle-config.xml"),
    (Compile / scalastyleFailOnError) := true,
    (Compile / scalastyleOnCompile) := true
  )
