# Command Line Interface design

![](../images/generaldiagram.png)
This diagram shows the basic interactions that happen via the command line when the folder and file structure of the repository is updated. For insance if a new part was added to the folder, then a yml file with the corresponded fields of a part should be created. Furthermore the `project.json` should be update each time these changes take place.

## Definitions

### User interface via CLI

The `User`interactis via the CLI.

### Separate Yaml files to capture data sets such as project related data, assembly related data, or part related data

`yml` files are used to write data and represent metadata about digital objects inside the project. For instance a part can be represented by a `<PartName>.yml` file that captures metadata such as CAD path, CAM path, quantities needed, etc.

### Json manifest for interoperability

::: warning TODo

Complete this section of documentation

:::
