variable "app_name" {
    default = "myrunningcircle"
}

variable "location" {
    default = "West US"
}

variable admin_username {
  default = "linux_admin"
}

variable client_id {
    sensitive = true
}

variable client_secret {
    sensitive = true
}