lazy val root = (project in file("."))
  .settings(
    scalastyleConfig := baseDirectory.value / "scalastyle-config.xml",
    (Compile / scalastyleFailOnError) := true,
    (Compile / scalastyleOnCompile) := true
  )
  .settings(
    libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.15" % "test",
    addCompilerPlugin(scalastyleConfig.value)
  )
