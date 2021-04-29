resource "azurerm_resource_group" "myrunningcircle" {

    name = var.app_name

    location = var.location
}