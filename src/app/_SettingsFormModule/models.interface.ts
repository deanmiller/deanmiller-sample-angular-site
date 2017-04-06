
export interface WebAppAccounts{
  UserAccounts: UserAccounts
  Data: Data
}

export interface UserAccounts {
   Email: string;
}

export interface Data {
    CompanyInformation: {
      ContactNumber: string;
      MailingAddress: string;
    },
    DomainInformation: {
      Servers: string;
      WindowsDomain: string;
      Workstations: string;
    },
    WebAppSettings: {
      LifecycleManagement: {
        RemoveOldComputers: string;
        RemoveOldComputersdays: string;
        RemoveOldUsers: string;
        RemoveOldUsersdays: string;
      },
      Notifications: {string;
        monitor: string;
        other: string;
      },
      Other: {
        MonitorInternetConnectoion: string;
      },
      Reports: {
        OldUsers: string;
        Prune: string;
        ServerUptime: string;
      },
      Servers: {
        DefragServers: string;
        MonitorDiskSpace: string;
        MonitorServers: string;
        ServersToMonitor: string;
      },
      Workstations: {
        BlockUnwantedPrograms: string;
        Clean: string;
        Inventory: string;
        PruneFilesOlderThan: number;
        PruneOldFiles: string;
        RemoveOldRoamingProfiles: string;
        RemoveProfilesOlderThan: number;
      }
    }
}


export interface UserAccounts {
    Email: string;
    UserName: string;
  }