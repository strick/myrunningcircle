resource "azurerm_container_registry" "container_registry" {
  
    name = "myrunningcircle"
    resource_group_name = azurerm_resource_group.myrunningcircle.name

    location = "eastus"
    admin_enabled = true
    sku = "Basic"

}