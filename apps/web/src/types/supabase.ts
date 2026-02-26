export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      addresses: {
        Row: {
          apt: string | null
          city: string
          created_at: string
          id: string
          instructions: string | null
          is_default: boolean
          state: string
          street: string
          updated_at: string
          user_id: string | null
          zip: string
        }
        Insert: {
          apt?: string | null
          city: string
          created_at?: string
          id?: string
          instructions?: string | null
          is_default?: boolean
          state: string
          street: string
          updated_at?: string
          user_id?: string | null
          zip: string
        }
        Update: {
          apt?: string | null
          city?: string
          created_at?: string
          id?: string
          instructions?: string | null
          is_default?: boolean
          state?: string
          street?: string
          updated_at?: string
          user_id?: string | null
          zip?: string
        }
        Relationships: [
          {
            foreignKeyName: "addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      business_profiles: {
        Row: {
          business_name: string
          created_at: string
          ein: string
          updated_at: string
          user_id: string
          verified: boolean
        }
        Insert: {
          business_name: string
          created_at?: string
          ein: string
          updated_at?: string
          user_id: string
          verified?: boolean
        }
        Update: {
          business_name?: string
          created_at?: string
          ein?: string
          updated_at?: string
          user_id?: string
          verified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "business_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      deliveries: {
        Row: {
          created_at: string
          current_lat: number | null
          current_lng: number | null
          driver_id: string | null
          driver_name: string | null
          driver_phone: string | null
          estimated_delivery: string | null
          estimated_pickup: string | null
          id: string
          order_id: string
          photo_proof_url: string | null
          provider: Database["public"]["Enums"]["delivery_provider"]
          status: Database["public"]["Enums"]["delivery_status"]
          tracking_url: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_lat?: number | null
          current_lng?: number | null
          driver_id?: string | null
          driver_name?: string | null
          driver_phone?: string | null
          estimated_delivery?: string | null
          estimated_pickup?: string | null
          id?: string
          order_id: string
          photo_proof_url?: string | null
          provider: Database["public"]["Enums"]["delivery_provider"]
          status?: Database["public"]["Enums"]["delivery_status"]
          tracking_url?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_lat?: number | null
          current_lng?: number | null
          driver_id?: string | null
          driver_name?: string | null
          driver_phone?: string | null
          estimated_delivery?: string | null
          estimated_pickup?: string | null
          id?: string
          order_id?: string
          photo_proof_url?: string | null
          provider?: Database["public"]["Enums"]["delivery_provider"]
          status?: Database["public"]["Enums"]["delivery_status"]
          tracking_url?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "deliveries_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string
          product_id: string
          product_name: string
          quantity: number
          sku: string
          subtotal: number
          unit_price: number
          updated_at: string
          weight_lbs: number
        }
        Insert: {
          created_at?: string
          id?: string
          order_id: string
          product_id: string
          product_name: string
          quantity: number
          sku: string
          subtotal: number
          unit_price: number
          updated_at?: string
          weight_lbs: number
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          product_id?: string
          product_name?: string
          quantity?: number
          sku?: string
          subtotal?: number
          unit_price?: number
          updated_at?: string
          weight_lbs?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          confirmed_at: string | null
          created_at: string
          customer_id: string
          delivered_at: string | null
          delivery_address_id: string
          delivery_fee: number
          delivery_photo_url: string | null
          estimated_delivery: string
          id: string
          notes: string | null
          order_number: string
          payment_intent_id: string
          picked_up_at: string | null
          prepared_at: string | null
          profile_type: Database["public"]["Enums"]["profile_type"]
          savings: number
          status: Database["public"]["Enums"]["order_status"]
          subtotal: number
          tax: number
          total: number
          updated_at: string
          vendor_id: string
        }
        Insert: {
          confirmed_at?: string | null
          created_at?: string
          customer_id: string
          delivered_at?: string | null
          delivery_address_id: string
          delivery_fee: number
          delivery_photo_url?: string | null
          estimated_delivery: string
          id?: string
          notes?: string | null
          order_number: string
          payment_intent_id: string
          picked_up_at?: string | null
          prepared_at?: string | null
          profile_type: Database["public"]["Enums"]["profile_type"]
          savings: number
          status?: Database["public"]["Enums"]["order_status"]
          subtotal: number
          tax: number
          total: number
          updated_at?: string
          vendor_id: string
        }
        Update: {
          confirmed_at?: string | null
          created_at?: string
          customer_id?: string
          delivered_at?: string | null
          delivery_address_id?: string
          delivery_fee?: number
          delivery_photo_url?: string | null
          estimated_delivery?: string
          id?: string
          notes?: string | null
          order_number?: string
          payment_intent_id?: string
          picked_up_at?: string | null
          prepared_at?: string | null
          profile_type?: Database["public"]["Enums"]["profile_type"]
          savings?: number
          status?: Database["public"]["Enums"]["order_status"]
          subtotal?: number
          tax?: number
          total?: number
          updated_at?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_delivery_address_id_fkey"
            columns: ["delivery_address_id"]
            isOneToOne: false
            referencedRelation: "addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string
          created_at: string
          cut_diagram_url: string | null
          cut_type: string
          description: string
          featured: boolean
          id: string
          images: string[]
          in_stock: boolean
          name: string
          piece_count: string | null
          serving_size: string
          sku: string
          slug: string
          updated_at: string
          usda_grade: string | null
        }
        Insert: {
          category: string
          created_at?: string
          cut_diagram_url?: string | null
          cut_type: string
          description: string
          featured?: boolean
          id?: string
          images?: string[]
          in_stock?: boolean
          name: string
          piece_count?: string | null
          serving_size: string
          sku: string
          slug: string
          updated_at?: string
          usda_grade?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          cut_diagram_url?: string | null
          cut_type?: string
          description?: string
          featured?: boolean
          id?: string
          images?: string[]
          in_stock?: boolean
          name?: string
          piece_count?: string | null
          serving_size?: string
          sku?: string
          slug?: string
          updated_at?: string
          usda_grade?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          phone: string | null
          preferred_language: Database["public"]["Enums"]["preferred_language"]
          profile_type: Database["public"]["Enums"]["profile_type"]
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          phone?: string | null
          preferred_language?: Database["public"]["Enums"]["preferred_language"]
          profile_type: Database["public"]["Enums"]["profile_type"]
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          preferred_language?: Database["public"]["Enums"]["preferred_language"]
          profile_type?: Database["public"]["Enums"]["profile_type"]
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Relationships: []
      }
      vendors: {
        Row: {
          address_id: string
          contact_name: string
          contact_phone: string
          created_at: string
          id: string
          is_active: boolean
          name: string
          type: Database["public"]["Enums"]["vendor_type"]
          updated_at: string
        }
        Insert: {
          address_id: string
          contact_name: string
          contact_phone: string
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          type: Database["public"]["Enums"]["vendor_type"]
          updated_at?: string
        }
        Update: {
          address_id?: string
          contact_name?: string
          contact_phone?: string
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          type?: Database["public"]["Enums"]["vendor_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendors_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "addresses"
            referencedColumns: ["id"]
          },
        ]
      }
      weight_tiers: {
        Row: {
          created_at: string
          id: string
          price_per_lb: number
          product_id: string
          updated_at: string
          weight_lbs: number
        }
        Insert: {
          created_at?: string
          id?: string
          price_per_lb: number
          product_id: string
          updated_at?: string
          weight_lbs: number
        }
        Update: {
          created_at?: string
          id?: string
          price_per_lb?: number
          product_id?: string
          updated_at?: string
          weight_lbs?: number
        }
        Relationships: [
          {
            foreignKeyName: "weight_tiers_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      delivery_provider: "uber_direct" | "doordash" | "private_van"
      delivery_status:
        | "pending"
        | "assigned"
        | "picked_up"
        | "delivered"
        | "failed"
      order_status:
        | "pending"
        | "confirmed"
        | "preparing"
        | "out_for_delivery"
        | "delivered"
        | "cancelled"
      preferred_language: "en" | "es"
      profile_type: "residential" | "business"
      user_role: "customer" | "vendor" | "driver" | "csr" | "admin"
      vendor_type: "meat_market" | "warehouse"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      delivery_provider: ["uber_direct", "doordash", "private_van"],
      delivery_status: [
        "pending",
        "assigned",
        "picked_up",
        "delivered",
        "failed",
      ],
      order_status: [
        "pending",
        "confirmed",
        "preparing",
        "out_for_delivery",
        "delivered",
        "cancelled",
      ],
      preferred_language: ["en", "es"],
      profile_type: ["residential", "business"],
      user_role: ["customer", "vendor", "driver", "csr", "admin"],
      vendor_type: ["meat_market", "warehouse"],
    },
  },
} as const
