variable "app_name" {
    default = "myrunningcircle"
}

variable "location" {
    default = "West US"
}

variable admin_username {
  default = "linux_admin"
}

variable app_version { # Can't be called version! That's a reserved word.
}

variable client_id {
    sensitive = true
}

variable client_secret {
    sensitive = true
}